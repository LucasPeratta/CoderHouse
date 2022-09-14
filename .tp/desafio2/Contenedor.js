const { promises: fs } = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  getId(objetos) {
    if (!objetos.length) {
      return 1;
    }
    let ultPos = objetos.length - 1;
    let ultId = objetos[ultPos].id;

    return ultId + 1;
  }

  async save(obj) {
    let objetos = await this.getAll();
    const id = this.getId(objetos);
    const newObj = { ...obj, id };

    let datos = [...objetos, newObj];

    try {
      await fs.writeFile(this.ruta, JSON.stringify(datos, null, 2));
    } catch (error) {
      throw new Error(`Error al guardar los datos ${error}`);
    }
    return `El id del objeto guardado es ${id}`;
  }

  //num == id
  async getById(id) {
    let objs = await this.getAll();
    let obj = objs.filter((o) => o.id == id);
    if (obj.length == 0) {
      return `No se puede obtener el dato con el id: ${id}`;
    }
    return obj;
  }

  async getAll() {
    try {
      let objetos = await fs.readFile(this.ruta, { encoding: "utf-8" });
      return JSON.parse(objetos);
    } catch (error) {
      return [];
    }
  }

  async deleteById(id) {
    let objs = await this.getAll();
    console.log(objs);
    let obj = objs.filter((o) => o.id != id);
    console.log(obj);

    try {
      if (objs.length != obj.length) {
        await fs.writeFile(this.ruta, JSON.stringify(obj, null, 2));
      } else {
        console.log(`No se encontro el registro con el id: ${id}`);
      }
    } catch (error) {
      console.log(`No se puede borrar ese registro con el id: ${id}`);
    }
  }

  async deleteAll() {
    try {
      await fs.writeFile(this.ruta, JSON.stringify([], null, 2));
    } catch (error) {
      console.log(`No se pueden borrar los datos`);
    }
  }

  async idAleatorio() {
    try {
      let objetos = await this.getAll();
      const i = Math.floor(Math.random() * objetos.length);
      return objetos[i].id;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

const start = async () => {
  let productos = new Contenedor("./productos.txt");

  const o1 = await productos.save({
    title: "Tv",
    price: "100usd",
    thumbnail: "https://shop.samsung.com/ar/50-uhd-4k-smart-tv-au7000/p",
  });
  console.log(o1);

  const o2 = await productos.save({
    title: "phone",
    price: "150usd",
    thumbnail: "https://shop.samsung.com/ar/celular-galaxy-s22-ultra/p",
  });
  console.log(o2);

  const o3 = await productos.save({
    title: "ps5",
    price: "500usd",
    thumbnail:
      "https://www.fravega.com/p/sony-playstation-5-825gb-standard-color-blanco-y-negro-342748/",
  });
  console.log(o3);

  const x = await productos.getAll();
  console.log(x);

  const obj = await productos.getById(2);
  console.log(obj);

  await productos.deleteById(11);
  await productos.deleteById(1);

  await productos.deleteAll();
};

start();

module.exports = Contenedor;

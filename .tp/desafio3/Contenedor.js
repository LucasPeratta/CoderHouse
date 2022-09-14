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

module.exports = Contenedor;

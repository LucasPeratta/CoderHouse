class ContenedorMemoria {
  myId = 1;
  constructor() {
    this.productos = [];
  }

  getAll() {
    return this.productos;
  }

  getOne(id) {
    let objeto = this.productos;
    let miObj = objeto.filter((p) => p.id == Number(id));

    return miObj;
  }

  addOne(obj) {
    obj.id = this.myId++;
    this.productos.push(obj);
  }

  updateOne(id, obj) {
    let cambie = false;
    this.productos = this.productos.map((p) => {
      if (p.id == Number(id)) {
        cambie = true;

        return { ...obj, id };
      }
      return p;
    });
    if (!cambie) return { error: "producto no encontrado" };
    return { ...obj, id };
  }

  deleteOne(id) {
    let objeto = this.productos.filter((p) => p.id != Number(id));
    if (objeto.length == this.productos.length) {
      return false;
    }
    this.productos = objeto;

    return true;
  }
}

module.exports = ContenedorMemoria;

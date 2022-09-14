class ContenedorMemoria {
  constructor() {
    this.productos = [];
  }

  getAll() {
    return this.productos;
  }

  addOne(obj) {
    this.productos.push(obj);
  }
}

module.exports = ContenedorMemoria;

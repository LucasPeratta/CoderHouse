class Auto {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
  }
  mostrarDatos() {
    return `Marca: ${this.marca} Modelo: ${this.modelo} Color: ${this.color}`;
  }
}

const miAuto = new Auto("ferrari", "2020", "rojo");

module.exports = miAuto;

const lista = [1, 2, 3, 4, 5, 6];

lista
  .map((x) => x * x)
  .forEach((x) => {
    console.log(x);
  });

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  mostrarNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const hombre = new Persona("Jorge", "Perez");
console.log(hombre.mostrarNombreCompleto());

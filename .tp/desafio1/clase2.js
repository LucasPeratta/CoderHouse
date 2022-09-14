class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros; //[] de objetos
    this.mascotas = mascotas; //[] de nombres de mascotas
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascotas(nombre) {
    this.mascotas.push(nombre);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    const nuevo = {
      nombre: nombre,
      autor: autor,
    };
    this.libros.push(nuevo);
  }

  getBookNames() {
    return this.libros.map((libro) => {
      return libro.nombre;
    });
  }
}

const user = new Usuario("lucas", "peratta", [], []);
console.log(`Nombre completo: ${user.getFullName()}`);

user.addMascotas("mascota1");
user.addMascotas("mascota2");
user.addMascotas("mascota3");

console.log(`Cantidad de Mascotas: ${user.countMascotas()}`);

user.addBook("libro1", "autor1");
user.addBook("libro2", "autor2");
user.addBook("libro3", "autor3");
user.addBook("libro4", "autor4");

console.log(`Nombre de los libros: ${user.getBookNames()}`);

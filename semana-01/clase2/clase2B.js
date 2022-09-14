class Contador {
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }

  getResponsable() {
    return this.responsable;
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual;
  }

  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
}

const r1 = new Contador("Juan");
const r2 = new Contador("Pedro");

r1.contar();
r1.contar();
r1.contar();

r2.contar();
r2.contar();
r2.contar();
r2.contar();

console.log(`r1 ind: ${r1.obtenerCuentaIndividual()}`);
console.log(`r1 global: ${r1.obtenerCuentaGlobal()}`);
console.log(`r2 ind: ${r2.obtenerCuentaIndividual()}`);
console.log(`r2 global: ${r2.obtenerCuentaGlobal()}`);

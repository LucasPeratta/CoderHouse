const mostrarLista = (datos) => {
  if (datos.length > 0) {
    return datos;
  }
  return "lista vacia";
};
console.log(mostrarLista([1, 2]));
console.log(mostrarLista([]));

(function (datos) {
  if (datos.length > 0) {
    return datos;
  }
  return "lista vacia";
})();

console.log([10, 20, 30]);

const crearMultiplicador = (num) => {
  return function (num2) {
    return num * num2;
  };
};

const duplicar = crearMultiplicador(2);

console.log(crearMultiplicador(2, 4));

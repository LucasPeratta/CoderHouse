let numeros = {};

function numRandom(min, max) {
  return Math.floor(Math.random() * 20);
}

for (let i = 1; i < 1000; i++) {
  let numero = numRandom();
  if (!numeros[numero]) numero = 0;
  else numeros[numero]++;
}
console.log(numeros);

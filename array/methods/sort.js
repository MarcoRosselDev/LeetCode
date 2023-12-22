/* ordena los elementos de un array localmente y devuelve el array ordenado.
El modo de ordenamiento por defecto responde a la posicion del valor del string de a cuerdo a su valor Unicode.

Si no se provee la funcion, los elementos son ordenados conviertiendolos a string y comparando la posicion del valor unicode.
*/

const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

//-------------------------------

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

const f = items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(f);

// basicamente lo ordeenamos dependiendo de los criterios de a y b en este caso,
// aplicamos la comparacion de los .name > comparation.
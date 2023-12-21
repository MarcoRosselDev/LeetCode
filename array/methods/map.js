/* crea un nuevo array con el resultado de la funcion que pasa por
cada elemento del array.
map no modifica el array original */

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
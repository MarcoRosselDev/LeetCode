// Determina si todos los elementos de un array satisfacen
// una condicion.
const array1 = [1, 30, 39, 29, 10, 13];

const menorQue = (value) => value < 40;
// le hacemos una pregunta si el valor es menor a 40
// si dice que si retorna true.

console.log(array1.every((valor) => valor < 40));
//console.log(array1.every(menorQue));
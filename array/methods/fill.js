/* El método fill() cambia todos los elementos en 
un arreglo por un valor estático, desde el índice 
start (por defecto 0) hasta el índice end (por 
defecto array.length). Devuelve el arreglo 
modificado. */

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
//console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
//console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

//console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// rellena el array2 con el valor 7 desde la posicion 4 a la 6

const array2 = [0, 2, 5, 5, 7, 2, 1, 4, 5, 7, 1, 9, 1]
//console.log(array2.length);

const solucion = array2.fill(7, 3, 6)
console.log(solucion);

/* [
  0, 2, 5, 7, 7, 7,
  1, 4, 5, 7, 1, 9,
  1
]
 */
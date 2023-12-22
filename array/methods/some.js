/* comprueba si al menos un elemento del array cumple con la condicion
implementada por la funcion proporcionada. 
retornando un booleano.*/

const array = [1, 2, 3, 4, 5];

console.log(array.some(elemento => elemento % 2 === 0));
// Expected output: true

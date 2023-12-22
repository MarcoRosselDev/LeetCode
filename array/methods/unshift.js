/* agrega uno o mas elementos al inicio del array,
y devuelve la nueva longitud del array

sintax:
unshift(element1, element2, ... ,  elementN)
*/

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

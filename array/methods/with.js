/* modifica in elemento de un indice espesificado,
luego lo retorna como un nuevo array, por lo que no 
modifica el array instanceado.

sintax:

arrayInstance.with(index, value)
index = indice
value = elemento nuevo
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
// arr no fue modificado 
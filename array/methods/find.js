// devuelve el primer elemento del array que coinsida con la restriccion

const array1 = [5, 12, 8, 130, 44];

const resultado = array1.find(elemento => elemento > 30);
console.log(resultado);// 130
// retorna 130


/* Si necesitas el índice del elemento encontrado en el array, 
utiliza findIndex().

Si necesitas encontrar el índice de un elemento, Array.prototype.indexOf(). 
(Es similar a findIndex(), pero comprueba la igualdad de cada elemento con el 
valor en lugar de usar una función de prueba.)

Si necesitas encontrar si un valor existe en un array, 
utiliza Array.prototype.includes().

Si necesitas encontrar si algún elemento cumple la función de prueba proporcionada, 
usa Array.prototype.some().
 */
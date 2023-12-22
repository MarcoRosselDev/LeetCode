/* devuelve un nuevo objeto Array Iterador
que contiene los valores para cada indice del array. */

var arr = ["w", "y", "k", "o", "p"];
var iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}
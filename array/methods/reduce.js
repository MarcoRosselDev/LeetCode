/*  */

// sintax
// reduce(callbackFn, initialValue)
[0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
  return valorAnterior + valorActual;
}, 10);

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
// por que el valor inicial es 10
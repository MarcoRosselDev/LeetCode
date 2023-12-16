//El método entries() retorna un nuevo objeto Array Iterator 
// que contiene los pares clave/valor para cada índice de la 
// matriz.

const a = ['a', 'b', 'c'];
const iterador = a.entries();
console.log(iterador);//Object [Array Iterator] {}

//console.log(iterador.lenght);
for (const elemento of iterador) {
  console.log(elemento);
}

//cuando es un Object [Array Iterator] {}
// significa que es iterable solo por un for of

// alternativa es:
// var eArr = arr[Symbol.iterator]();

//console.log(eArr.next().value); // w
//console.log(eArr.next().value); // y
//console.log(eArr.next().value); // k
/* determina si una matriz inluye un determinado
elemento,
devuelve true o false */

const array_1 = [1, 2, 3];
const pregunta = array_1.includes(3);
console.log(pregunta);
// true

const array_2 = ['cat' ,'dog', 'bat'];
const pregunta_2 = array_2.includes('dog');
console.log(pregunta_2);
// true

const pregunta_3 = array_2.includes('human');
console.log(pregunta_3);
// false
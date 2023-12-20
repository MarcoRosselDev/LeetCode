/* determina si el valor pasado es un array,
retorna un boolean value. */

const a = Array.isArray([1, 2])
//true
const b = Array.isArray({2:3})
//false
console.log(a, b);
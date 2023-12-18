/* El metodo filter crea un nuevo array con 
todos los elementos que cumplan la condicion
implementada por la funcion dada. */

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const resultado = words.filter(item => item.length > 6)

console.log(resultado);
// output
// [ 'exuberant', 'destruction', 'present' ]
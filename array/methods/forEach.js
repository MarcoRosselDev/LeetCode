/* El metodo forEach() ejecuta la funcion
indicada una vez por cada elemento del array
 */

const array_1 = ['a', 'b', 'c'];
array_1.forEach(elem => console.log(elem))

/* la diferencia con map, es que forEach no
retorna algo en espesifico,
si intentamos guardarlo en una variable const
y lo imprimimos retorna undefined,
esto solo sirbe como bucle y no se puede parar.
por lo queremos detenerlos si se cumple una condicion,
forEach no es una buena opcion,
en su lugar usar un bucle normal. */
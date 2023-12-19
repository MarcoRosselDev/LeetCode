const arr1 = [1, 2, [3, 4]];
const respuesta = arr1.flat();
// [1, 2, 3, 4]
console.log(respuesta);

const arr2 = [1, 2, [3, 4, [5, 6]]];
const respuesta_2 = arr2.flat();
console.log(respuesta_2);
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
const respuesta_3 = arr3.flat(2);
console.log(respuesta_3);
// [1, 2, 3, 4, 5, 6]
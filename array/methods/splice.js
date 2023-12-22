/* cambia el contenido de un array eliminando
elementos existentes o agregando nuevos elementos. */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

/* sintax:

splice(start, deleteCount, item1, item2, ...)
start: posicion de inicio
deleteCoutn: 0 y n-negativ == no elimina elementos
  si se decea eliminarlos todos == infinity,
item: elemento a agregar.
*/

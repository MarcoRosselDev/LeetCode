console.log("Hola mundo");
const boton = document.querySelector(".nuevo_parrafo");

function nuevo_parrafo() {
  let elemento_p = document.createElement("p");
  elemento_p.textContent = "texto de prueba";
  document.body.appendChild(elemento_p);
}

boton.addEventListener("click", nuevo_parrafo);

/* 
document.addEventListener("DOMContentLoaded", function() {
  ...
});

esta es una forma segura de evitar errores de orden de carge del dom,
nos asegura que el codigo escrito en el blocke solo se ejecutara si el dom esta cargado y analizado.

esto tambien se puede evitar si escribimos la bandera defer en el script de html
*/

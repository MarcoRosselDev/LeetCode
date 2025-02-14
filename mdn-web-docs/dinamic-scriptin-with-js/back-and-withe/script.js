const html = document.querySelector("html");
const selection = document.querySelector("select");
// tarea
// buscar como obtener la info de el estilo predeterminado del navegador o usuario
// para amoldarse a sus preferencias.
console.log(window.navigator);

selection.addEventListener("change", change);

function change() {
  selection.value === "white"
    ? action("white", "black")
    : action("black", "white");
}

function action(bg, color) {
  html.style.backgroundColor = bg;
  html.style.color = color;
}

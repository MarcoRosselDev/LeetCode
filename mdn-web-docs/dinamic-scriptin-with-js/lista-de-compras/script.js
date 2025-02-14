/* 
<form>
  <h3>Lista de compras</h3>
  <label for="new-item">ingresar nuevo item</label>
  <input type="text" name="new-item" class="input" />
  <button>nuevo item</button>
</form>
<div class="div-lista">
  <ul>
    <li>one <button>delete</button></li>
    <li>two <button>delete</button></li>
    <li>three <button>delete</button></li>
  </ul>
</div>
*/

const input = document.querySelector(".input");
const btn = document.querySelector(".new-item");
// referencia del dom
const div_lista = document.querySelector(".div-lista");
const ul = document.createElement("ul");
div_lista.append(ul);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const btn_delete = document.createElement("button");
  const li = document.createElement("li");

  btn_delete.textContent = "eliminar item";
  btn_delete.setAttribute("class", "dell");
  li.innerText = input.value;
  li.append(btn_delete);

  ul.appendChild(li);
  input.value = "";

  const dell = document.querySelectorAll(".dell");
  console.log(dell);
  for (let i = 0; i < dell.length; i++) {
    dell[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log("hola");
    });
  }
});

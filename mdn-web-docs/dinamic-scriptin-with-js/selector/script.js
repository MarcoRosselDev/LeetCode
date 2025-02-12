const travis = document.querySelector("#travis");
const mensaje = document.querySelector("#mensaje");

travis.addEventListener("change", chowArticle);

function chowArticle() {
  let selection = travis.value;
  if (selection === "soleado") {
    mensaje.innerText = "random text with the option of soleado";
  } else if (selection === "nublado") {
    mensaje.innerText =
      "random text with the option of nublado aklsjdf;lkasjd;flkajsd;flk ajs;dlkfj";
  } else if (selection === "lluvia") {
    mensaje.innerText =
      "random text with the option of lluvia alk;sdjf;alksdjf";
  } else {
    mensaje.innerText = "";
  }
}

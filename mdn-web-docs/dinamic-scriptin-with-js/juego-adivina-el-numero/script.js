const enviar_respuesat = document.querySelector(".enviar_respuesta");
const mi_numero = document.querySelector(".mi_numero");
const intentos = document.querySelector(".intentos");
const mensaje = document.querySelector(".mensaje");

const numero_random = Math.floor(Math.random() * 100);
let numero_de_intentos = 0;

function add_boton_reset() {
  const btn = document.createElement("button");
  btn.innerText = "reset";
  document.querySelector("body").appendChild(btn);
  console.log("some change");
}

function resultado(msj, int = 0) {
  console.log(numero_random);

  if (numero_de_intentos >= 10) {
    mensaje.style.backgroundColor = "pink";
    mensaje.innerText = "Lo siento tus intentos se terminaron";
    add_boton_reset();
  } else if (msj === "el numero es muy grande") {
    mensaje.style.backgroundColor = "pink";
    mensaje.innerText = msj;
    intentos.innerText += `  ${int}`;
    numero_de_intentos++;
  } else if (msj === "el numero es muy chiquito") {
    mensaje.style.backgroundColor = "pink";
    mensaje.innerText = msj;
    intentos.innerText += `  ${int}`;
    numero_de_intentos++;
  } else if (msj === "ganaste") {
    mensaje.style.backgroundColor = "lightblue";
    mensaje.innerText = msj;
    intentos.innerText += `  ${int}`;
    numero_de_intentos = 10;
    const btn = document.createElement("button");
    btn.innerText = "reset";
    document.querySelector("body").appendChild(btn);
  }
}

enviar_respuesat.addEventListener("click", (event) => {
  event.preventDefault();
  const mi_numero_natural = Number.parseInt(mi_numero.value, 10);

  if (mi_numero_natural > numero_random) {
    resultado("el numero es muy grande", mi_numero_natural);
  } else if (mi_numero_natural < numero_random) {
    resultado("el numero es muy chiquito", mi_numero_natural);
  } else if (mi_numero_natural === numero_random) {
    resultado("ganaste", mi_numero_natural, mi_numero_natural);
  }
});

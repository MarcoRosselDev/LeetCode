import './style.css'

function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
  this.upperName = function () {
    return `${this.nombre.toUpperCase()}`
  }
}

const persona_const = {
  nombre: 'marco',
  edad: 31,
  saludar: function () {
    return `Hola, buenos dias. Yo soy ${this.nombre}`
  }
}

console.log(persona_const.saludar());

class Persona_class {
  constructor(name) {
    this.name = name
  }
  mover_brazo () {
    return `Mover brazo de ${this.name}`
  }
}

const persona_2 = new Persona_class('marco')
console.log(persona_2.mover_brazo(``));

const persona_1 = new Persona('marco', 31)
console.log(persona_1.upperName()); // MARCO

const canvas = document.getElementById('div')

canvas.innerHTML = '<p>Hola munod!</p>'
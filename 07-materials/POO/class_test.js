class Persona {
  constructor(edad, nombre, altura){
    this.edad = edad
    this.nombre = nombre
    this.altura = altura
  }
  get_nombre(){
    return `Hola mi nombre es ${this.nombre}`
  }
  get_altura(str){
    return `Hola, yo mido ${this.altura} y me gusta el ${str}`
  }
}

const marco = new Persona(31, 'marco', 1.73)

console.log(marco.get_altura('arroz con huevo'));

{
  console.log('hola');
}
{
  console.log('hola denuevo');
}
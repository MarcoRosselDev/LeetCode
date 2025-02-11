let str = "marco le gusta mozilla por que es mas rapida";
const qu = str.indexOf("zilla") // pregunto si la palabra mozilla contiene zilla
  ? str.slice(str.indexOf("zilla")) // if true, cortar en el indice .
  : "not found"; // if not, guardar un string predeterminado

console.log(qu);

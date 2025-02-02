function ExcepcionDeUsuario_(mensaje) {
  this.mansaje = mensaje;
  this.name = "Expresion de usuario";
}

ExcepcionDeUsuario_.prototype.toString = function () {
  return `${this.name}: ${this.mansaje}`;
};

throw new ExcepcionDeUsuario_("Valor muy alto");

/* devuelve una cadena de texto representando los 
elementos del array.
Los elementos son convertidos a texto y son separados por
un caracter especificado por la localidad */

// sintax:
// array.toLocalString(locales, options)
// locales: etiqueta de idioma, para la forma general del string
// options: objeto con la configuraciones (numeros y fechas)

var precios = ["$7", 500, 8123, 12];
precios.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

// "$7, $500, $8.123, $12"
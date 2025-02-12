// retornar las ciudades con mayusculas el principio y el resto en minusculas
const citys = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

let solution = [];

for (let c of citys)
  solution.push(
    c.toLowerCase().replace(c[0].toLowerCase(), c[0].toUpperCase())
  );

console.log(solution);

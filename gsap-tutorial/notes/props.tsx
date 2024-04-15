export function Props({name, age}:{name:string, age:number}): JSX.Element | null| string {
  console.log(name, age);
  // podemos aplicar las props type en linea o crear un type externo o importarlo
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
    </>
  )
}
/* export function Props({name, age}:{name:string, age:number}): JSX.Element | null| string {
  console.log(name, age);
  // podemos aplicar las props type en linea o crear un type externo o importarlo
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
    </>
  )
} */

/* type Props_type = { // proimera opcion
  name: string
  age: number
  children?: React.ReactNode
} */
import { type PropsWithChildren } from "react"

type Props_type = PropsWithChildren<{
  name: string
  age: number
}>

export function Props({name, age, children}:Props_type):JSX.Element {
  
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      {children}
    </>
  )
}
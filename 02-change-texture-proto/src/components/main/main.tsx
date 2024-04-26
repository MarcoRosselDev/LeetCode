import { useContext } from "react"
import { MainCanvas } from "./mainCanvas"
import { Contexto } from "../../contexto/contextoGlobal"

export function Main() {

  const {cambiarColor} = useContext(Contexto)
  //"red" | "green" | "lightblue" | "orange"

  return (
    <>
      {/* se vienen cositas */}
      <div className="botones-cambiar-color">
        <button onClick={() => cambiarColor('red')}>rojo</button>
        <button onClick={() => cambiarColor('green')}>verde</button>
        <button onClick={() => cambiarColor('lightblue')}>celeste</button>
        <button onClick={() => cambiarColor('orange')}>naranjo</button>
      </div>
      <MainCanvas/>
    </>
  )
}
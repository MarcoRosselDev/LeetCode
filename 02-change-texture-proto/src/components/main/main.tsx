import { useContext } from "react"
import { MainCanvas } from "./mainCanvas"
import { Contexto } from "../../contexto/contextoGlobal"
import './main.css'

export function Main() {

  const {cambiarColor, setPosicion} = useContext(Contexto)
  //"red" | "green" | "lightblue" | "orange"

  return (
    <>
      <div className="botones-cambiar-color">
        <button onClick={() => cambiarColor('red')}>rojo</button>
        <button onClick={() => cambiarColor('green')}>verde</button>
        <button onClick={() => cambiarColor('lightblue')}>celeste</button>
        <button onClick={() => cambiarColor('orange')}>naranjo</button>
        <button onClick={() => setPosicion([1.2, 1, 0])}>subir</button>
        <button onClick={() => setPosicion([1.2, 0, 0])}>bajar</button>
        <button onClick={() => setPosicion([1.2, 0, 1])}>izquierda</button>
        <button onClick={() => setPosicion([1.2, 0, -1])}>derecha</button>
      </div>
      <div className="div-canvas-main">
        <MainCanvas/>
      </div>
    </>
  )
}
import { useContext } from "react";
import { context } from "../contexto/Context";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Tema } from "../contexto/TemaGlobal";

export function Body() {

  const {dark} = useContext(context)
// aplicar la style class si dark es type Tema
  return (
    <div >
      <Header/>
      <Main />
      
    </div>
  )
}
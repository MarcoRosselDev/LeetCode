import { useContext } from "react";
import { context } from "../contexto/Context";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import './body.css'

export function Body() {

  const {dark} = useContext(context)
  console.log(dark);
  
// aplicar la style class si dark es type Tema
  return (
    <div className={`body-${dark} body`}>
      <Header/>
      <Main />
      
    </div>
  )
}
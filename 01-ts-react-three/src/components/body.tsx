import { useContext, useRef } from "react";
import { context } from "../contexto/Context";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import './body.css'
//gsap utils
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Body() {

  const container = useRef<any>();

  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", {x: 360, duration: 3}); // <-- automatically reverted
  
  }, { scope: container }); // <-- scope is for selector text (optional)

  
  const {dark} = useContext(context)
// aplicar la style class si dark es type Tema
  return (
    <div className={`body-${dark} body`} ref={container}>
      <Header/>
      <Main />
      {/* <div className="box gradient-blue">
        <Main />
      </div> */}
      
    </div>
  )
}
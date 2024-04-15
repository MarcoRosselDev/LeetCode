import { useRef } from 'react'
import './App.css'
import { gsap,  } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Props } from '../notes/props'
import {States} from '../notes/state'
import { Component } from '../notes/event';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  //const [count, setCount] = useState(0)
  //const ThemeContext =  useContext(null) //????

  //type T = any

  const box = useRef(null)
  const blue_box = useRef(null)
  const contenedor = useRef(null)
  const state_elements = useRef(null)

  useGSAP(() =>{
    gsap.to(".box", { rotation: "+=360", duration: 3 })

    gsap.to(blue_box.current, { x: 200 })

    gsap.to(state_elements.current, { x: 200, duration: 3 })
  }, {scope: contenedor})
/*   useGSAP(() =>{
    gsap.to('box', {
      duration: 3,
      rotation: 360,
      scale: 2,
      scrollTrigger: {
        trigger: '.box',
        markers: true,
        scrub: true
      }
    })
  })
 */
/*   useEffect(() =>{
    gsap.to('box', {
      duration: 3,
      rotation: 360,
      scale: 2,
      scrollTrigger: {
        trigger: '.box',
        markers: true,
        scrub: true
      }
    })
  }, [])   */

  return (
    <>
      <p>Hola mundo</p>
      <div ref={contenedor}>
        <Component />
        <div ref={state_elements}>
          <Props name='marco' age={30}/>
          <Props name='linda' age={31}>
            <h1>Buenos dias Linda</h1>
          </Props>

          <States />
        </div>
        <div className='box-div box' ref={box}>
          <p>Hola!</p>
        </div>
        <div ref={blue_box} className='blue-box'>
          <p>blue!</p>
        </div>
      </div>
    </>
  )
}

export default App

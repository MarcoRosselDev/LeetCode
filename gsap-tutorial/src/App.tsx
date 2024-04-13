import { useEffect, useRef } from 'react'
import './App.css'
import { gsap,  } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  //const [count, setCount] = useState(0)
  //const ThemeContext =  useContext(null) //????

  type T = any

  const box = useRef<T>();

  useEffect(() =>{
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
  }, [])  

  return (
    <>
      <p>Hola mundo</p>
      <div className='box-div' ref={box}>
        <p>Hola!</p>
      </div>
    </>
  )
}

export default App

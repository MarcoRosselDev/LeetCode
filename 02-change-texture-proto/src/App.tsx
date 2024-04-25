import './App.css'
//import { Model } from './../Cubo.jsx'
import { Body } from './components/Body.js'
import { Canvas } from '@react-three/fiber'
import { HandleContext } from './contexto/handleContext.js'
import { useContext } from 'react'
import { Contexto } from './contexto/contextoGlobal.js'

function App() {
  const {something} = useContext(Contexto)

  console.log(something);
  
  return (
    <>
      <HandleContext >
        <div>
          <button>rojo</button>
          <button>azul</button>
          <button>verde</button>
          <button>amarillo</button>
        </div>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Body position={[1.2, 0, 0]} />
          {/* <Model /> */}
        </Canvas>
      </HandleContext >
    </>
  )
}

export default App

import './main.css'
import { Canvas } from '@react-three/fiber'
import {Box} from './Box'

export function Main() {
  // si aplico la class .box se puede mover no nesecariamente tengo que invocar gsap en este componente!!
  
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <main>
      <div className='box'>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
      <p>another section</p>
    </main>
  )
}
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
          <Box position={[1.2, 0, 0]} />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
      <p>another section</p>
    </main>
  )
}
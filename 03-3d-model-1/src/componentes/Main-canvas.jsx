import {Canvas} from '@react-three/fiber'
import {Model} from './Model'

export function MainCanvas() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  )
}
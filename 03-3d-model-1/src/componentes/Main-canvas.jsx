import {Canvas} from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import {Model} from './Model'

export function MainCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <CameraControls makeDefault />
      <Model />
    </Canvas>
  )
}
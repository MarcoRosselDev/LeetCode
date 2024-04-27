import { Canvas } from "@react-three/fiber";
import { Cubo } from "../Cubo";
import {Model} from "../Mono"

export function MainCanvas() {
  
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Cubo position={[1.2, 0, 0]} />
      <Model position={[-1, 0, 0]} />
      {/* <Model /> */}
    </Canvas>
  )
}
import { Canvas } from "@react-three/fiber";
import { Cubo } from "../Cubo";
import {Model} from "../Mono"
import { useContext } from "react";
import { Contexto } from "../../contexto/contextoGlobal";
import { OrbitControls } from "@react-three/drei";

export function MainCanvas() {

  const {posicion} = useContext(Contexto)
  
  return (
    <Canvas >
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <Cubo position={[1.2, 0, 0]} /> */}
      <Cubo position={posicion} />
      <Model position={[-1, 0, 0]} />
      {/* <Model /> */}
    </Canvas>
  )
}
import {Canvas} from '@react-three/fiber'
import { CameraControls, Edges } from '@react-three/drei'
import {Model} from './Model'
import {Side} from './Side'

export function MainCanvas() {
  return (
    <Canvas shadows camera={{ position: [-3, 2.5, 3] }}> 
      {/* camera=nos ubica en la posicion inicial al cargar la pagina */}

      {/* ambientLight = luz ambiental, si no se aplica se ve todo negro, deve ir por defecto para ver colores y materiales */}
      <ambientLight intensity={2.5} />
      {/* CameraControls = nos permite orbitar el objeto con el mouse */}
      <CameraControls makeDefault />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <Edges />
        <Side rotation={[0, 0, 0]} bg="orange" index={0}>
          <torusGeometry args={[0.65, 0.3, 64]} />
        </Side>
        <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
          <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
        </Side>
        <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="lightgreen" index={2}>
          <boxGeometry args={[1.15, 1.15, 1.15]} />
        </Side>
        <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
          <octahedronGeometry />
        </Side>
        <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
          <icosahedronGeometry />
        </Side>
        <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
          <dodecahedronGeometry />
        </Side>
      </mesh>
      <Model />
    </Canvas>
  )
}
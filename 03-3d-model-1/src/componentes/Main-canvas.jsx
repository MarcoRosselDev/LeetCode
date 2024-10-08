import {Canvas} from '@react-three/fiber'
import { CameraControls, Edges } from '@react-three/drei'
import {Side} from './Side'

export function MainCanvas() {

  return (
    <Canvas shadows camera={{ position: [3, 1.5, -3] }}>
      <CameraControls makeDefault />
      {/* <pointLight position={[5, 5, 5]} intensity={3}/> */}
      {/* <pointLight position={[10, 10, 10]} intensity={3}/> */}
      {/* <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <directionalLight position={[0, 0, 7]} color="red" intensity={10}/> */}
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
    </Canvas>
  )
}
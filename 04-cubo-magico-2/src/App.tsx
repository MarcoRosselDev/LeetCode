import { Canvas } from '@react-three/fiber'

const App = () => (
  <Canvas>
    <pointLight position={[1, 1, 1]} intensity={3}/>
    <ambientLight intensity={0.5}></ambientLight>
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  </Canvas>
)

export default App
import { Canvas } from '@react-three/fiber'
import { CameraControls} from '@react-three/drei'

const App = () => (
  <Canvas>
    <CameraControls makeDefault />
    <pointLight position={[1, 1.5, 2]} intensity={3}/>
    {/* <ambientLight intensity={0.5}></ambientLight> */}
    {/* <orthographic ></orthographic> */}
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  </Canvas>
)

export default App
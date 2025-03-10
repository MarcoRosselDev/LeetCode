import * as THREE from 'three'
import { useContext, useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { Contexto } from '../contexto/contextoGlobal'

export function Cubo(props: ThreeElements['mesh']) {

  const {color} = useContext(Contexto)
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
        {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      </mesh>
    </>
  )
}

/* createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
) */
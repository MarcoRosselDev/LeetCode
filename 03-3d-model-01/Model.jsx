 import { Environment, MeshPortalMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
/*
export function Model({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }: {rotation:any, bg:any, children: any, index: any}) {
  const { nodes, materials } = useGLTF('./public/model/aobox-transformed.glb')
  const mesh = useRef<any>()
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta
  })

  return (
    <MeshPortalMaterial  attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
        <spotLight castShadow color={bg} intensity={2} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
      </mesh>
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  )
}

useGLTF.preload('/aobox-transformed.glb')
 */



export function Model({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }) {
  const mesh = useRef()
  //const { worldUnits } = useControls({ worldUnits: false })
  const { nodes } = useGLTF('./public/model/aobox-transformed.glb')
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta
  })
  return (
    <MeshPortalMaterial /* worldUnits={worldUnits} */ attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
        <spotLight castShadow color={bg} intensity={2} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  )
}
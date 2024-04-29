import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('./public/model/aobox-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/aobox-transformed.glb')

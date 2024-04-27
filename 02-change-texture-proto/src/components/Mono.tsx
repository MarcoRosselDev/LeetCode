import { useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber'
import { useContext } from 'react'
import { Contexto } from '../contexto/contextoGlobal'

export function Model(props: ThreeElements['group']) {

  const {color} = useContext(Contexto)
  const { nodes, materials } = useGLTF('../../public/model/mono.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={materials['Material.001']} >  
        <meshStandardMaterial color={color} />
       {/*  <meshStandardMaterial color={'red'} />{/* cualquier color ! */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/mono.glb')

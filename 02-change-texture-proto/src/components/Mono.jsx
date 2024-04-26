/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model/mono.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('../../public/model/mono.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={materials['Material.001']} >  
        <meshStandardMaterial color={'blue'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/mono.glb')

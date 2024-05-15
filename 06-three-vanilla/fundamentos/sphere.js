import './style.css'

import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const scena = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 7)
camara.position.z = 2

// sphera geeometria
const radius =  1;  
const widthSegments = 7;  
const heightSegments = 7;  
const geometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
const material_sphera = new THREE.MeshPhongMaterial()
const mesh_sphere = new THREE.Mesh(geometry, material_sphera)
scena.add(mesh_sphere)

//luz
const luz = new THREE.AmbientLight('white', 2)
scena.add(luz)

function re_render(time) {
  const tiempo = time*0.001
  mesh_sphere.rotation.x = tiempo
  mesh_sphere.rotation.y = tiempo
  renderer.render(scena, camara)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(re_render)
}

re_render()
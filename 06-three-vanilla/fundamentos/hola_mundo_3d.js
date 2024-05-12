console.log('hola');

import * as THREE from 'three'
import './style.css'


const canvas = document.querySelector('#c')
  
function main() {
  
  
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
  const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 7)
  camara.position.z = 2
  const scene = new THREE.Scene()
  const geometria  = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({color: 'pink'})
  const box = new THREE.Mesh(geometria, material)
  scene.add(box)
  
  renderer.render(scene, camara)
}

main()
import * as THREE from 'three'
import './style.css'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true, premultipliedAlpha: false,})
const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 20)
camara.position.z = 4

const luz = new THREE.AmbientLight('white', 30)
scene.add(luz)

const esfera = new THREE.SphereGeometry(2, 10, 10, 10)
//const mix = new THREE.MixOperation()
const basic_material = new THREE.MeshBasicMaterial({
  color: '#e17a7a', 
  reflectivity: 0.5,
  combine: THREE.MixOperation
})
const materia_2 = new THREE.Material({opacity: 1, alphaTest: 0.5, alphaHash: true, transparent: true})
const mesh_basic_material = new THREE.Mesh(esfera, basic_material, materia_2)

scene.add(mesh_basic_material)

//renderer.render(scene, camara)

function rotacion(time) {
  const tiempo = time * 0.001
  mesh_basic_material.rotation.y = tiempo

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)// resize
  
  requestAnimationFrame(rotacion)
}

rotacion()
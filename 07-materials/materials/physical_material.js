import './style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({
  antialias: true, 
  canvas, 
  alpha: true, 
  premultipliedAlpha: false
})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4
//luz
const luz = new THREE.DirectionalLight('white', .5)
const ambientalLight = new THREE.AmbientLight('white', 0.1)

luz.position.z = 3
luz.position.y = 6
luz.position.x = 3
// esfera
const esfera = new THREE.SphereGeometry(1, 20, 20, 20)
// mesh basic material: se diferancia de phong material por que esta tiene rugosidad y metalidad
const material_esfera_1 = new THREE.MeshPhysicalMaterial({
  color: 'lightblue', 
  //roughness: .5,
  //metalness: 1,
  clearcoat: 1,
  clearcoatRoughness: 0,
})
const mesh_esfera_1 = new THREE.Mesh(esfera, material_esfera_1)

scene.add(mesh_esfera_1, luz, ambientalLight)

function animation(time) {
  const tiempo = time*.001
  mesh_esfera_1.rotation.z = tiempo
  mesh_esfera_1.rotation.y = tiempo

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  renderer.render(scene, camara)
  requestAnimationFrame(animation)
}
animation()
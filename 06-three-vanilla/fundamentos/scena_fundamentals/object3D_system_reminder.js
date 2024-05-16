import resizeRendererToDisplaySize from '../resize'
import '../style.css'
import * as THREE from 'three'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 2

// esfera
const sphere = new THREE.SphereGeometry(1, 7, 7, 7)
// sol
const material_sol = new THREE.MeshPhongMaterial({emissive: 'yellow'})
const mesh_sol = new THREE.Mesh(sphere, material_sol)
const sistema_sol = new THREE.Object3D()
sistema_sol.scale.set(.4, .4,.4)
sistema_sol.add(mesh_sol)
// tierra
const material_tierra = new THREE.MeshPhongMaterial({emissive: 'blue'})
const mesh_tierra = new THREE.Mesh(sphere, material_tierra)
mesh_tierra.position.x = 0
mesh_tierra.scale.set(.4, .4, .4)
const sistema_tierra = new THREE.Object3D()
sistema_tierra.position.x = 2
sistema_tierra.add(mesh_tierra)
// luna
const material_luna = new THREE.MeshPhongMaterial({emissive: 'grey'})
const mesh_luna = new THREE.Mesh(sphere, material_luna)
sistema_tierra.add(mesh_luna)
mesh_luna.position.x = 0.8
mesh_luna.scale.set(.2, .2, .2)
sistema_sol.add(sistema_tierra)
scene.add(sistema_sol)

function frame(time) {
  const tiempo = time*0.001
  sistema_sol.rotation.y = tiempo
  mesh_tierra.rotation.z = tiempo
  mesh_luna.rotation.x = tiempo
  sistema_tierra.rotation.z = tiempo
  // refrescar pixel aspect si se modifica el tamagnio de la pantalla
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)

  renderer.render(scene, camara)
  requestAnimationFrame(frame)
}

frame()
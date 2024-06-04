import './style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({
  canvas,     // canvas id se debe llamar canvas por obligacion
  alpha: true // este hace el background transparente
})
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 20)
camera.position.z = 10 // retrocedemos la posicion de la camera 4 unidades para ver mejor
camera.position.y = 2 // retrocedemos la posicion de la camera 4 unidades para ver mejor

const sphera_geometry = new THREE.SphereGeometry(1, 10, 10)
const sphera_material = new THREE.MeshPhongMaterial({
  color: 'lightblue',
  shininess: 650, // shininess = brillo
})
const sphera_mesh = new THREE.Mesh(sphera_geometry, sphera_material)
sphera_mesh.position.y = 1
const luz_ambiental = new THREE.AmbientLight('white', 1)
const luz_direccional = new THREE.DirectionalLight('white', 2)
luz_direccional.position.x = 3
luz_direccional.position.y = 3
luz_direccional.position.z = 2
//pizo
const pizo_geo = new THREE.BoxGeometry(10,10,0.01)
const pizo_material = new THREE.MeshPhongMaterial({color: 'coral', shininess: 700})
const pizo_mesh = new THREE.Mesh(pizo_geo, pizo_material)
pizo_mesh.rotateX(Math.PI/2)
pizo_mesh.position.y = -1

scene.add(sphera_mesh, luz_ambiental, luz_direccional, pizo_mesh)

function animation() {
  sphera_mesh.rotation.x += 0.01
  sphera_mesh.rotation.y += 0.01

  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  renderer.render(scene, camera)
  requestAnimationFrame(animation)
}

animation()
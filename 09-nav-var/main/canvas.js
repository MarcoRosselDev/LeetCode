import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})
// activar las sombras a true del renderer
renderer.shadowMap.enabled = true// activar sombras en general

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
//camera.position.z = 15
//camera.position.y = 5
camera.position.set(10,10,10)
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshPhongMaterial({
  color: '#e17a7a',
  shininess: 950,
  shadowSide: true,
})
const mesh = new THREE.Mesh(geometry, material)
const mesh_2 = new THREE.Mesh(geometry, material)
mesh_2.position.set(2, 1, 0)
mesh_2.castShadow = true

mesh.position.y = 3
mesh.castShadow = true// sobrea emitida del cubo

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const luz_ambiental = new THREE.AmbientLight('white', 2)
const luz_direccional = new THREE.DirectionalLight('white', 1.5)
luz_direccional.position.set(0,5,3)
luz_direccional.castShadow = true // activar emisor de sombras de la luz direccional
//const help_light = new THREE.DirectionalLightHelper(luz_direccional, 0.4,'blue')
/* const help_camera_light = new THREE.CameraHelper(luz_direccional.shadow.camera)
scene.add(help_camera_light) */

const pizo = new THREE.PlaneGeometry(30, 30)
const material_pizo = new THREE.MeshPhysicalMaterial({
  color: 'white',
  //side: THREE.DoubleSide,
  clearcoat: 0.4,
  clearcoatRoughness: 0.16,
  //shininess: 600,
  roughness: 0.5,
  reflectivity: 0.8,
})
// pizo
const pizo_mesh = new THREE.Mesh(pizo, material_pizo)
pizo_mesh.rotateX(-Math.PI/2)
pizo_mesh.receiveShadow = true // activar el resivimiento de las sombras activas
// paredes
const pared = new THREE.Mesh(pizo, material_pizo)
pared.position.set(0,5,-5)
const pared_2 = new THREE.Mesh(pizo, material_pizo)
//pared_2.rotation.y = Math.Pi/2
pared_2.rotation.y = Math.PI/2
pared_2.position.set(-5,5,0)

// nota: a considerar el rendimiento de la pagina si se activan muchas sombras
// por eso vienen desactivadas por defecto, por su alto costo de calculo
// x^n costo exponencial a la cantidad de objetos en scene

scene.add(
  mesh,mesh_2,
  luz_ambiental, 
  luz_direccional, 
  pizo_mesh,
  pared,
  pared_2,
)
//scene.add(help_light)

function animatronic(time) {
  const tiempo = time*0.0005
  mesh.rotation.x = tiempo
  mesh.rotation.y = tiempo

  controls.update();

  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)
  renderer.render(scene, camera)
  requestAnimationFrame(animatronic)
}

animatronic()
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
mesh.position.y = 3
mesh.castShadow = true// sobrea emitida del cubo

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const luz_ambiental = new THREE.AmbientLight('white', 2)
const luz_direccional = new THREE.DirectionalLight('white', 1)
luz_direccional.position.set(0,5,0)
luz_direccional.castShadow = true // activar emisor de sombras de la luz direccional
const help_light = new THREE.DirectionalLightHelper(luz_direccional, 0.4,'blue')

const pizo = new THREE.PlaneGeometry(10, 10)
const material_pizo = new THREE.MeshPhysicalMaterial({
  color: 'white',
  //side: THREE.DoubleSide,
  clearcoat: 0.4,
  clearcoatRoughness: 0.16,
  //shininess: 600,
  roughness: 0.5,
  reflectivity: 0.8,
  })
const pizo_mesh = new THREE.Mesh(pizo, material_pizo)
pizo_mesh.rotateX(-Math.PI/2)
pizo_mesh.receiveShadow = true // activar el resivimiento de las sombras activas

// nota: a considerar el rendimiento de la pagina si se activan muchas sombras
// por eso vienen desactivadas por defecto, por su alto costo de calculo

scene.add(mesh, luz_ambiental, luz_direccional, pizo_mesh)
scene.add(help_light)

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
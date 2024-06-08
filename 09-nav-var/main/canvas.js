import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 15
camera.position.y = 5
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color: 'coral'})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.y = 1

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const luz_ambiental = new THREE.AmbientLight('white', 2)
const luz_direccional = new THREE.DirectionalLight('white', 2)
luz_direccional.position.set(3,4,2)

const pizo = new THREE.PlaneGeometry(10, 10)
const material_pizo = new THREE.MeshPhysicalMaterial({
  color: 'white',
  side: THREE.DoubleSide,
  clearcoat: 0.4,
  clearcoatRoughness: 0.16,
  shininess: 600,
  reflectivity: 0.8,
})
const pizo_mesh = new THREE.Mesh(pizo, material_pizo)
pizo_mesh.rotateX(Math.PI/2)

scene.add(mesh, luz_ambiental, luz_direccional, pizo_mesh)

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
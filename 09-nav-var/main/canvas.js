import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 15
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color: 'coral'})
const mesh = new THREE.Mesh(geometry, material)

const luz_ambiental = new THREE.AmbientLight('white', 1)
const luz_direccional = new THREE.DirectionalLight('white', 1)
luz_direccional.position.set(3,4,0)

const pizo = new THREE.PlaneGeometry(10, 10)
const material_pizo = new THREE.MeshStandardMaterial({color: 'white'})
const pizo_mesh = new THREE.Mesh(pizo, material_pizo)
pizo_mesh.rotateX

scene.add(mesh, luz_ambiental, luz_direccional, pizo_mesh)

function animatronic(time) {
  const tiempo = time*0.0005
  mesh.rotation.x = tiempo
  mesh.rotation.y = tiempo

  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)
  renderer.render(scene, camera)
  requestAnimationFrame(animatronic)
}

animatronic()
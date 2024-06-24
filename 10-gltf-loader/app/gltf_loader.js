import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')

//const renderer = new THREE.WebGLRenderer({canvas})
const renderer = new THREE.WebGLRenderer({
  canvas, 
  antialias:true, 
  alpha:true
})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 8
const scene = new THREE.Scene()

const box = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshPhongMaterial({color:'coral'})
const mesh = new THREE.Mesh(box, material)

const luz_ambiental = new THREE.AmbientLight(0xffffff, 1)

scene.add(
  mesh,
  luz_ambiental,
)

function animation() {
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.005
  
  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()
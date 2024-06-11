import * as THREE from 'three'
import '../style.css'
import resizeRendererToDisplaySize from '../main/resize.js'

console.log(THREE);

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({
  canvas, 
  antialias: true,
  alpha:true,
})
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 30)
camera.position.z = 10

const geometry = new THREE.SphereGeometry(1,10,10)
const material = new THREE.MeshPhongMaterial({
  color: 'coral'
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

function animatronix() {
  renderer.render(scene, camera)
  
  requestAnimationFrame(animatronix)
  resizeRendererToDisplaySize(renderer)
}
animatronix()
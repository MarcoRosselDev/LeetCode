import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
const scene = new THREE.Scene()
camera.position.z = 8
camera.position.y = 1
const ambiental_light = new THREE.AmbientLight(0xffffff,3)

const loader = new THREE.TextureLoader();
const texture = loader.load('5.jpg');
texture.colorSpace = THREE.SRGBColorSpace;

console.log(texture);
const floor = new THREE.PlaneGeometry(10, 10)
const floor_material = new THREE.MeshBasicMaterial({
  //color: 'red',
  map: texture, 
})
const mesh_floor = new THREE.Mesh(floor, floor_material)
mesh_floor.rotation.x = (-1.5)

scene.add(
  mesh_floor,
  ambiental_light,
)

function animation() {
  resizeRendererToDisplaySize(renderer)
  renderer.render(scene, camera)
}

animation()
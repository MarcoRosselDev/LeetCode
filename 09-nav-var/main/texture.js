import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
const scene = new THREE.Scene()
camera.position.z = 8
camera.position.y = 1

const floor = new THREE.PlaneGeometry(10, 10)
const floor_material = new THREE.MeshBasicMaterial({color: 'red', side: true})
const mesh_floor = new THREE.Mesh(floor, floor_material)
mesh_floor.rotation.x = (-1.5)

scene.add(mesh_floor)

function animation() {
  resizeRendererToDisplaySize(renderer)
  renderer.render(scene, camera)
}

animation()
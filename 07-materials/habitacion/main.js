import * as THREE from 'three'
import '../luz/style.css'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:false})
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 20
camera.position.y = 3
const ambiental_ligth = new THREE.AmbientLight('white', 1)
const directional_light = new THREE.DirectionalLight('white', 5)
directional_light.position.set(3,5,0)

const box_geo = new THREE.BoxGeometry(1,1,1)
const box_material = new THREE.MeshPhongMaterial({color:'lightblue', shininess: 600})
const box_mesh = new THREE.Mesh(box_geo, box_material)
box_mesh.position.y = 0

const pizo_geo = new THREE.BoxGeometry(10,10, 0.01)
const pizo_material = new THREE.MeshPhongMaterial({color: 'lightgreen', shininess: 450})
const pizo_mesh = new THREE.Mesh(pizo_geo, pizo_material)
pizo_mesh.rotation.x = Math.PI / 2
pizo_mesh.position.y = -2
//pizo_material.position.x = 2

//paredes-----------------------------------------------------
const pared_geo = new THREE.BoxGeometry(10, 5, 0.01)
const pared_material = new THREE.MeshPhongMaterial({color: 'coral', shininess: 600})
const pared_tracera = new THREE.Mesh(pared_geo, pared_material)
pared_tracera.position.z = -5
pared_tracera.position.y = 0

document.addEventListener('keydown', mover_camera, false)

function mover_camera(target) {
  console.log(target.keyCode);
  let keycode = target.keyCode
  if(keycode === 40){
    camera.translateZ(0.05)
  } else if (keycode === 38) {
    camera.translateZ(-0.05)
  } else if (keycode === 39) {
    camera.translateX(0.05)
  } else if (keycode === 37) {
    camera.translateX(-0.05)
  }
}

scene.add(
  ambiental_ligth, 
  directional_light, 
  box_mesh, pizo_mesh,
  pared_tracera,
)

function animation() {
  renderer.render(scene, camera)
  box_mesh.rotation.x += 0.01
  box_mesh.rotation.y += 0.01

  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()
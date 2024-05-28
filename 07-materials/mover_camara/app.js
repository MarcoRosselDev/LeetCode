import '../luz/style.css'
import resizeRendererToDisplaySize from '../resize.js'
import * as THREE from 'three'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha: false, premultipliedAlpha: false})
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 20)
camera.position.z = 4

const box_g = new THREE.BoxGeometry(1,1,1)
const box_m = new THREE.MeshBasicMaterial({color: 'lightgreen'})
const mesh_box = new THREE.Mesh(box_g, box_m)
scene.add(mesh_box)

document.addEventListener('keydown', onKeyDown, false)

function onKeyDown(event) {
  let keycode = event.which
  console.log(keycode);

  if (keycode === 40) {
    camera.translateZ(0.1)
  } else if (keycode === 38) {
    camera.translateZ(-0.1)
  } else if (keycode === 37) {
    camera.translateX(0.1)
  } else if (keycode === 39) {
    camera.translateX(-0.1)
  }
  //left 39
  //right 37
  // up 38
  // down 40
}

function animation() {

  mesh_box.rotation.x += 0.01
  mesh_box.rotation.y += 0.01

  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}
animation()
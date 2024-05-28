import * as THREE from 'three'
import '../luz/style.css'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, alpha: false, antialias: true, premultipliedAlpha: false})
const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

const sphere_geometria = new THREE.SphereGeometry(1, 10, 10)
const sphere_material = new THREE.MeshBasicMaterial({color: 'lightblue'})
const sphere_mesh = new THREE.Mesh(sphere_geometria, sphere_material)

scene.add(sphere_mesh)

function animar(time) {
  const tiempo = time*0.001
  sphere_mesh.rotation.x = tiempo
  sphere_mesh.rotation.y = tiempo

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  requestAnimationFrame(animar)
  renderer.render(scene, camara)
}

animar()
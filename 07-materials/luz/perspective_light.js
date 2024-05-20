import './style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, alpha: true, premultipliedAlpha: false, antialias: true})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4


const geometria_esfera = new THREE.SphereGeometry(1, 10, 10, 10)
const material_esfera = new THREE.MeshPhongMaterial({color: 'pink', shininess: 300})
const mesh_esfera = new THREE.Mesh(geometria_esfera, material_esfera)

const luz = new THREE.DirectionalLight('white', 1)
luz.position.y = 3

scene.add(mesh_esfera, luz)

function animacion(time) {
  const tiempo = time*0.0005
  mesh_esfera.rotation.y = tiempo
  mesh_esfera.rotation.z = tiempo
  luz.rotation.z = tiempo
  luz.rotation.y = tiempo

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  renderer.render(scene, camara)
  requestAnimationFrame(animacion)
}

animacion()
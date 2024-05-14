import './style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const escena = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 5)
camara.position.z = 3

const geometria = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({color: 'pink'})
const material = new THREE.MeshNormalMaterial()
const cubo_mesh = new THREE.Mesh(geometria, material)
escena.add(cubo_mesh)

const box_2 = new THREE.Mesh(geometria, new THREE.MeshPhysicalMaterial({color: 'lightblue'}))
box_2.position.x = 2
escena.add(box_2)

const luz = new THREE.DirectionalLight('white', 1.5)
luz.position.z = 2
escena.add(luz)
/* renderer.render(escena, camara)
resizeRendererToDisplaySize(renderer.domElement)
 */

function rotar_cubo(tiempo) {
  tiempo *= 0.001
  cubo_mesh.rotation.x = tiempo
  cubo_mesh.rotation.y = tiempo
  box_2.rotation.x = tiempo
  box_2.rotation.y = tiempo

  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(escena, camara)
  resizeRendererToDisplaySize(renderer)// resize  
  
  requestAnimationFrame(rotar_cubo)
}

rotar_cubo()
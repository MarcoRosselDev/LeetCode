import resizeRendererToDisplaySize from '../resize'
import './style.css'
import * as THREE from 'three'

const canvas = document.getElementById('c_2')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, premultipliedAlpha: false})

const scene = new THREE.Scene()
const camara = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 30)
//const camara = new THREE.PerspectiveCamera(50, 1, 0.1, 30)
camara.position.z = 8

//rectangulos
const geometria_rectangulo = new THREE.BoxGeometry(2,1,1)
const material_rect_1 = new THREE.MeshPhongMaterial({color: 'lightGreen', shininess: 900})
const mesh_rect_1 = new THREE.Mesh(geometria_rectangulo, material_rect_1)
mesh_rect_1.position.set(0,0,-3)

//luz ambiental y direccional
const luz_ambiente = new THREE.AmbientLight('white', 0.1)
const luz_direccional = new THREE.DirectionalLight('white', 1)
luz_direccional.position.y = 10
luz_direccional.position.x = 5

scene.add(mesh_rect_1, luz_ambiente, luz_direccional)

//console.log(time);
function animacion(time) {// al parecer time es un derivado de requestAnimationFrame
  // de otra froma log time nos arojara un error
  const tiempo = time*0.001
  mesh_rect_1.rotation.y = tiempo
  mesh_rect_1.rotation.z = tiempo

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  renderer.render(scene, camara)
  
  requestAnimationFrame(animacion)
}
animacion()
import * as THREE from 'three'
import './style.css'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias:true, canvas, alpha: true, premultipliedAlpha: false})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 30)
camara.position.z = 6

// geometria y material
const esfera = new THREE.SphereGeometry(1, 10, 10, 10)
// esfera 2
const material_esfera_2 = new THREE.MeshPhongMaterial({color: 'lightblue', shininess: 300})
const mesh_esfera_2 = new THREE.Mesh(esfera, material_esfera_2)
mesh_esfera_2.position.x = 2
//mesh_esfera_2.scale.set(.5,.5,.5)

// esfera 1
const material_esfera_1 = new THREE.MeshPhongMaterial({color: 'lightblue', shininess: 0})
const mesh_esfera_1 = new THREE.Mesh(esfera, material_esfera_1)
mesh_esfera_1.position.x = -2

//esfera 3
const material_esfera_3 = new THREE.MeshPhongMaterial({color: 'lightblue'})
const mesh_esfera_3 = new THREE.Mesh(esfera, material_esfera_3)
//mesh_esfera_3.position.x = 2

//luz
const luz = new THREE.PointLight('white', 4)
luz.position.set(1,0,2)

// esfera 4 : mush Toon Material
const material_esfera_4 = new THREE.MeshToonMaterial({color: 'lightgreen'})
const mesh_esfera_4 = new THREE.Mesh(esfera, material_esfera_4)
mesh_esfera_4.position.y = -2

// agregar todo a la escena
scene.add(luz, mesh_esfera_1 ,mesh_esfera_2, mesh_esfera_3, mesh_esfera_4)

function animation(time) {
  const tiempo = time*0.001
  mesh_esfera_1.rotation.y = tiempo
  mesh_esfera_1.rotation.z = tiempo
  mesh_esfera_2.rotation.y = tiempo
  mesh_esfera_2.rotation.z = tiempo
  mesh_esfera_3.rotation.y = tiempo
  mesh_esfera_3.rotation.z = tiempo
  mesh_esfera_4.rotation.y = tiempo
  mesh_esfera_4.rotation.z = tiempo

  //calidad
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)

  requestAnimationFrame(animation)
} 

animation()
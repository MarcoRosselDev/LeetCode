import * as THREE from 'three'
import './style.css'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias:true, canvas, alpha: true, premultipliedAlpha: false})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 30)
camara.position.z = 2

// geometria y material
const esfera = new THREE.SphereGeometry(1, 10, 10, 10)
const material_esfera = new THREE.MeshPhongMaterial({color: 'lightblue', shininess: 300})
const mesh_esfera = new THREE.Mesh(esfera, material_esfera)
mesh_esfera.scale.set(.5,.5,.5)

//luz
const luz = new THREE.PointLight('white', 4)
luz.position.set(1,0,2)
scene.add(luz, mesh_esfera)


function animation(time) {
  const tiempo = time*0.001
  mesh_esfera.rotation.y = tiempo
  mesh_esfera.rotation.z = tiempo

  //calidad
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)

  requestAnimationFrame(animation)
} 

animation()
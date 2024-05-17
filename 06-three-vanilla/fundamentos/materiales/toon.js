import '../style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const scene = new THREE.Scene()

//console.log(scene);
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

const esfera = new THREE.SphereGeometry(1, 7,7,7)
const material_toon = new THREE.MeshToonMaterial({color:'#3f7b9d', bumpScale: 0.5})
//alphaTexture carga una textura que tenemos que cargar con texture.loader()
const mesh_esfera = new THREE.Mesh(esfera, material_toon)
mesh_esfera.scale.set(1.2, 1.2, 1.2)

//luz

const luz = new THREE.DirectionalLight('white', 2)
luz.position.z = 6
luz.position.y = 4
scene.add(luz)

scene.add(mesh_esfera)
console.log(renderer.domElement);

function frame(time) {
  const tiempo = time*0.001
  
  mesh_esfera.rotation.z = tiempo
  mesh_esfera.rotation.y = tiempo
  //luz.rotation.x = tiempo
  
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(frame)
}

frame()
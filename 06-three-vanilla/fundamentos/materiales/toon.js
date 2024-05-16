import '../style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

const esfera = new THREE.SphereGeometry(1, 7,7,7)
const material_toon = new THREE.MeshToonMaterial({color:'#3f7b9d', bumpScale: 0.5, wireframe:true})
//alphaTexture carga una textura que tenemos que cargar con texture.loader()
const mesh_turus = new THREE.Mesh(esfera, material_toon)
mesh_turus.scale.set(1.2, 1.2, 1.2)

//luz

const luz = new THREE.DirectionalLight('white', 2)
luz.position.z = 6
luz.position.y = 4
scene.add(luz)

scene.add(mesh_turus)

function frame(time) {
  const tiempo = time*0.001

  mesh_turus.rotation.z = tiempo
  mesh_turus.rotation.y = tiempo
  //luz.rotation.x = tiempo

  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(frame)
}

frame()
import * as THREE from 'three'
import resizeRendererToDisplaySize from './main/resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})
renderer.shadowMap.enabled = true

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 8
//camera.position.y = 2
const luz_ambiental = new THREE.AmbientLight(0xffffff, 0.5)
const luz_direccional = new THREE.DirectionalLight(0xffffff, 1)
luz_direccional.position.set(1,3,2)
luz_direccional.castShadow = true
luz_ambiental.position.set(2,2,2)
/* const luz_direccional_helper = new THREE.DirectionalLightHelper(luz_direccional, undefined, 'blue')
scene.add(luz_direccional_helper) */

scene.add(
  luz_ambiental,
  luz_direccional,
)

/* ahora agreagare unos planos para proyectar practicar el uso de sombras */
const plano_base = new THREE.PlaneGeometry(10,10)
const plano_material = new THREE.MeshPhongMaterial({color:'white'})
const plano_mesh = new THREE.Mesh(plano_base, plano_material)
plano_mesh.rotation.x = -Math.PI/2
plano_mesh.position.y = -1.8
plano_mesh.receiveShadow = true // resivir las sobras de los elementos con castShadow = true

scene.add(
  plano_mesh,
)

function animation() {


  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()

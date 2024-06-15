import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 8
const luz_ambiental = new THREE.AmbientLight(0xffffff, 0.5)
const luz_direccional = new THREE.DirectionalLight(0xffffff, 1)
luz_ambiental.position.set(2,2,2)

const sphera_geometry = new THREE.SphereGeometry(1,10,10)
const sol_material = new THREE.MeshPhongMaterial({color: 'yellow',})
const sol_mesh = new THREE.Mesh(sphera_geometry, sol_material)

scene.add(
  sol_mesh,
  luz_ambiental,
  luz_direccional,
)

function animation() {
  sol_mesh.rotation.y += 0.005

  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()
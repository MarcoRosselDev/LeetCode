import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 3
const luz_ambiental = new THREE.AmbientLight(0xffffff, 0.5)
const luz_direccional = new THREE.DirectionalLight(0xffffff, 1)
luz_ambiental.position.set(2,2,2)

const sphera_geometry = new THREE.SphereGeometry(1,10,10)
const sol_material = new THREE.MeshPhongMaterial({color: 'yellow',})
const sol_mesh = new THREE.Mesh(sphera_geometry, sol_material)

const solar_sistem = new THREE.Object3D()
const tierra_sistem = new THREE.Object3D()
solar_sistem.add(sol_mesh)
console.log(solar_sistem);

const tierra_material = new THREE.MeshPhongMaterial({color: 'blue'})
const mesh_tierra = new THREE.Mesh(sphera_geometry, tierra_material)
mesh_tierra.position.x = 2
mesh_tierra.scale.set(0.3,0.3,0.3)
solar_sistem.add(mesh_tierra)

const moon_material = new THREE.MeshPhongMaterial({color: 'green'})
const mesh_moon = new THREE.Mesh(sphera_geometry, moon_material)
tierra_sistem.add(mesh_moon)


scene.add(
  solar_sistem,
  luz_ambiental,
  luz_direccional,
)

function animation() {
  solar_sistem.rotation.y += 0.005
  mesh_tierra.rotation.y += 0.005
  mesh_tierra.rotation.x += 0.005

  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()
import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

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
const luz_direccional_helper = new THREE.DirectionalLightHelper(luz_direccional, undefined, 'blue')
scene.add(luz_direccional_helper)

const sphera_geometry = new THREE.SphereGeometry(1,10,10)
const sol_material = new THREE.MeshPhongMaterial({color: 'yellow',})
const sol_mesh = new THREE.Mesh(sphera_geometry, sol_material)
sol_mesh.castShadow = true

const solar_sistem = new THREE.Object3D()
const tierra_sistem = new THREE.Object3D()
solar_sistem.add(sol_mesh)
//console.log(solar_sistem);

const tierra_material = new THREE.MeshPhongMaterial({color: 'blue'})
const mesh_tierra = new THREE.Mesh(sphera_geometry, tierra_material)
mesh_tierra.castShadow = true
//mesh_tierra.position.x = 2
//solar_sistem.scale.set(0.5,0.5,0.5)
tierra_sistem.scale.set(0.7,0.7,0.7)
solar_sistem.add(tierra_sistem)
tierra_sistem.add(mesh_tierra)
tierra_sistem.position.set(4,0,0)

const moon_material = new THREE.MeshPhongMaterial({color: 'green'})
const mesh_moon = new THREE.Mesh(sphera_geometry, moon_material)
tierra_sistem.add(mesh_moon)
mesh_moon.castShadow = true
mesh_moon.position.x = 2
mesh_moon.scale.set(0.5,.5,0.5)

scene.add(
  solar_sistem,
  luz_ambiental,
  luz_direccional,
)

/* ahora agreagare unos planos para proyectar practicar el uso de sombras */
const plano_base = new THREE.PlaneGeometry(20,20)
const plano_material = new THREE.MeshPhongMaterial({color:'white'})
const plano_mesh = new THREE.Mesh(plano_base, plano_material)
plano_mesh.rotation.x = -Math.PI/2
plano_mesh.position.y = -1.8
plano_mesh.receiveShadow = true // resivir las sobras de los elementos con castShadow = true

scene.add(
  plano_mesh,
)

function animation() {
  solar_sistem.rotation.y += 0.005
  tierra_sistem.rotation.z += 0.05
  //tierra_sistem.rotation.z += 0.05
  mesh_tierra.rotation.y += 0.005
  mesh_tierra.rotation.x += 0.005
  mesh_moon.rotation.x += 0.005
  mesh_moon.rotation.y += 0.005

  renderer.render(scene, camera)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
}

animation()


/* Tarea para la casa:

Buscar el ayudador de la luz direccional que enmarca el perimetro,
la idea es ver su limite para que las sombras no queden cortadas,
la esfera verde que representa a la luna en el sistema solar se ve cortada en siertas partes,
si vemos y logramos manipular el perimetro de la luz direccional
podemos evitar estos cortes de sombra,
por el momento setie la altura para que no se corte al subir.
*/
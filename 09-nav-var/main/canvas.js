import * as THREE from 'three'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camera.position.z = 10
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color: 'coral'})
const mesh = new THREE.Mesh(geometry, material)


const luz_ambiental = new THREE.AmbientLight('#f0f0f0', 1)
const luz_direccional = new THREE.DirectionalLight('#f0f0f0', 1)
luz_direccional.position.set(3,4,0)

scene.add(mesh, luz_ambiental, luz_direccional)

function animatronic(time) {
  const tiempo = time*0.0005
  mesh.rotation.x = tiempo
  mesh.rotation.y = tiempo

  renderer.render(scene, camera)
  requestAnimationFrame(animatronic)
}

animatronic()
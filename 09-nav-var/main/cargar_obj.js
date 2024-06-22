import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';

console.log(OBJLoader);
const objLoader = new OBJLoader()
//objLoader.load('resources/models/windmill/windmill.obj', (root) => {
objLoader.load('/models/windmill_001.obj', (root) => {
  scene.add(root);
  function mover_molino() {
    root.rotation.y += 0.005
    requestAnimationFrame(mover_molino)
  }
  mover_molino()
  //root.rotation.x += 0.005
});

// vamos a tratar de cargar un OBJ con sus respectivos materiales desde blender
// luego cargar otro tipos de objetos
// luego tratar de cambiar sus propiedades o colores a traves de los eventos de js

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
const scene = new THREE.Scene()
const ambiental_ligth = new THREE.AmbientLight(0xffffff, 1)

camera.position.z = 20

const structure_box = new THREE.BoxGeometry(1,1,1)
const material_box = new THREE.MeshPhongMaterial({color:'lightblue'})
const mesh_box = new THREE.Mesh(structure_box, material_box)

scene.add(
  mesh_box,
  ambiental_ligth,
)

function animation() {
  mesh_box.rotation.x += 0.005
  mesh_box.rotation.y += 0.005

  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(animation)
  renderer.render(scene, camera)
}

animation()
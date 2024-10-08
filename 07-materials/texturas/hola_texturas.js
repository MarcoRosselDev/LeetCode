import resizeRendererToDisplaySize from '../resize'
import './style.css'
import * as THREE from 'three'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, premultipliedAlpha: false})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4
const luz = new THREE.DirectionalLight('white', 2)
luz.position.x = 2
luz.position.y = 2
luz.position.z = 2
//cubo
const geometria_cubo = new THREE.BoxGeometry(1, 1, 1)
//const material_cubo = new THREE.MeshStandardMaterial({color: 'lightblue', roughness: 0.5})
const loader = new THREE.TextureLoader();
const texture = loader.load( 'imgs/wall.jpg' );
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshPhongMaterial({
  //color: 0xFF8844,
  map: texture,
});
const mesh_cubo = new THREE.Mesh(geometria_cubo, material)

scene.add(luz, mesh_cubo)

function animation(time) {
  const tiempo = time*0.001

  mesh_cubo.rotation.y = tiempo/2
  mesh_cubo.rotation.x = tiempo/3
  mesh_cubo.rotation.z = tiempo/2
  renderer.render(scene, camara)

  // actualizar aspecto del canvas
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)// resize

  requestAnimationFrame(animation)
}

animation()
import resizeRendererToDisplaySize from '../resize'
import './style.css'
import * as THREE from 'three'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, premultipliedAlpha: false})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4
//cubo
const geometria_cubo = new THREE.BoxGeometry(1, 1, 1)
// carga texturas
const loader = new THREE.TextureLoader();
//const texture = loader.load( 'imgs/wall.jpg' );
//texture.colorSpace = THREE.SRGBColorSpace;
const materiales = [
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/1.jpg')}),
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/2.jpg')}),
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/3.jpg')}),
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/4.jpg')}),
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/5.jpg')}),
  new THREE.MeshBasicMaterial({map: loadColorTexture('/imgs/6.jpg')}),
];

function loadColorTexture(ruta) {
  const texture = loader.load( ruta );
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/* const material = new THREE.MeshPhongMaterial({
  //color: 0xFF8844,
  map: texture,
}); */

//const material = new THREE.MeshBasicMaterial()
const mesh_cubo = new THREE.Mesh(geometria_cubo, materiales)

scene.add(mesh_cubo)

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
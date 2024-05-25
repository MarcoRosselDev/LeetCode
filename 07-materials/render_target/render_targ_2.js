import * as THREE from 'three'
import '../materials/style.css'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: false, logarithmicDepthBuffer: true})
const scene = new THREE.Scene()
const rtWidth = 512;
const rtHeight = 512;
const renderTarget = new THREE.WebGLRenderTarget(rtWidth, rtHeight);
const ambiental_light = new THREE.AmbientLight('blue', 10)
//
const rtFov = 75;
const rtAspect = rtWidth / rtHeight;
const rtNear = 0.1;
const rtFar = 5;
const rtCamera = new THREE.PerspectiveCamera(rtFov, rtAspect, rtNear, rtFar);
rtCamera.position.z = 2;
 
const rtScene = new THREE.Scene();
rtScene.background = new THREE.Color('lightblue');

const color = 0xFFFFFF;
const intensity = 80;
const light = new THREE.DirectionalLight(color, intensity);
const light_amb = new THREE.AmbientLight( 0x404040 )
light.position.set(-1, 2, 4);
rtScene.add(light, light_amb);
//
const geometria_cubo = new THREE.BoxGeometry(1,1,1)
//const material_cubo = new THREE.MeshBasicMaterial({color: 'lightcoral'})
const material = new THREE.MeshPhongMaterial({
  map: renderTarget.texture,
  shininess: 200,
});
const cube = new THREE.Mesh(geometria_cubo, material);
//cube.position.z = -1
scene.add(cube, light, ambiental_light, light_amb);
const material_cubo_2 = new THREE.MeshBasicMaterial({color: 'lightblue'})
//const mesh_cubo = new THREE.Mesh(geometria_cubo, material)
const mesh_cubo_2 = new THREE.Mesh(geometria_cubo, material_cubo_2)

//scene.add(mesh_cubo, light)
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

renderer.render(scene, camara)

function animation(time) {
  const tiempo = time*0.001

  cube.rotation.z = tiempo
  cube.rotation.y = tiempo
  //calidad
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)

  requestAnimationFrame(animation)
}

animation()
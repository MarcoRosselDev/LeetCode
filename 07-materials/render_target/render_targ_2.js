import * as three from 'three'
import '../materials/style.css'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new three.WebGLRenderer({canvas, antialias: true, alpha: false, logarithmicDepthBuffer: true})
const scene = new three.Scene()
const rtWidth = 512;
const rtHeight = 512;
const renderTarget = new three.WebGLRenderTarget(rtWidth, rtHeight);
const ambiental_light = new three.AmbientLight('blue', 10)
const amb_luz = new three.AmbientLight(0xffffff, 100)
//
const rtFov = 75;
const rtAspect = rtWidth / rtHeight;
const rtNear = 0.1;
const rtFar = 5;
const rtCamera = new three.PerspectiveCamera(rtFov, rtAspect, rtNear, rtFar);
rtCamera.position.z = 2;
 
const rtScene = new three.Scene();
rtScene.background = new three.Color('lightblue');

const color = 0xFFFFFF;
const intensity = 80;
const light = new three.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
rtScene.add(light);
//
const geometria_cubo = new three.BoxGeometry(1,1,1)
//const material_cubo = new three.MeshBasicMaterial({color: 'lightcoral'})
const material = new three.MeshPhongMaterial({
  map: renderTarget.texture,
});
const cube = new three.Mesh(geometria_cubo, material);
//cube.position.z = -1
scene.add(cube, light, ambiental_light, amb_luz);
const material_cubo_2 = new three.MeshBasicMaterial({color: 'lightblue'})
//const mesh_cubo = new three.Mesh(geometria_cubo, material)
const mesh_cubo_2 = new three.Mesh(geometria_cubo, material_cubo_2)

//scene.add(mesh_cubo, light)
const camara = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
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
import * as three from 'three'
import '../luz/style.css'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new three.WebGLRenderer({canvas, alpha:false, antialias: true, logarithmicDepthBuffer: true})

const scene = new three.Scene()
const camara = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4
const luz = new three.AmbientLight()
const luz_direccional = new three.DirectionalLight('white', 5)
const luz_direccional_2 = new three.DirectionalLight('white', 10)
luz_direccional.position.set(3,3,3)
scene.add(luz, luz_direccional)
//geometria
const geo_box = new three.BoxGeometry(1,1,1)

/* -------------------------------------------- */
const rtWidth = 512;
const rtHeight = 512;
const renderTarget = new three.WebGLRenderTarget(rtWidth, rtHeight);
//console.log(renderTarget);
const rtFov = 75;
const rtAspect = rtWidth / rtHeight;
const rtNear = 0.1;
const rtFar = 5;
const rtCamera = new three.PerspectiveCamera(rtFov, rtAspect, rtNear, rtFar);
rtCamera.position.z = 2;

const rtScene = new three.Scene();
rtScene.background = new three.Color('transparent');

rtScene.add(luz_direccional_2);

function makeInstance(geometry, color, x) {
  const material = new three.MeshPhongMaterial({color}); 
  const cube = new three.Mesh(geometry, material);
  rtScene.add(cube);
  cube.position.x = x;
  return cube;
}
const inst_box = makeInstance(geo_box, 0x44aa88,  0)
//console.log(inst_box);
/* -------------------------------------------- */
const material = new three.MeshPhongMaterial({
  map: renderTarget.texture,
  shininess: 900
});
//const mat_box = new three.MeshPhongMaterial({color: 'coral', shininess: 900})
const mesh_box = new three.Mesh(geo_box, material)
scene.add(mesh_box)
console.log('hi');

function animar(time) {
  const tiempo = time*0.001
  mesh_box.rotation.z = tiempo
  mesh_box.rotation.y = tiempo

  inst_box.rotation.x = tiempo
  inst_box.rotation.y = tiempo
  //renderer.setRenderTarget(renderTarget);
  // draw render target scene to render target
  renderer.setRenderTarget(renderTarget);
  renderer.render(rtScene, rtCamera);
  renderer.setRenderTarget(null);

  //calidad
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)

  requestAnimationFrame(animar)
}

animar()
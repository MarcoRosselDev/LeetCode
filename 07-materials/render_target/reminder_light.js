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
luz_direccional.position.set(3,3,3)
scene.add(luz, luz_direccional)
//geometria
const geo_box = new three.BoxGeometry(1,1,1)
const mat_box = new three.MeshPhongMaterial({color: 'coral', shininess: 900})
const mesh_box = new three.Mesh(geo_box, mat_box)
scene.add(mesh_box)
console.log('hi');

function animar(time) {
  const tiempo = time*0.001
  mesh_box.rotation.z = tiempo
  mesh_box.rotation.y = tiempo

  //calidad
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(scene, camara)
  resizeRendererToDisplaySize(renderer)

  requestAnimationFrame(animar)
}

animar()
import * as T from 'three'
import resizeRendererToDisplaySize from '../resize'
import '../materials/style.css'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias:true, canvas, alpha: true, premultipliedAlpha: false})

//render target
const rtWidth = 512;
const rtHeight = 512;
const render_target = new T.WebGLRenderTarget(rtWidth, rtHeight,{
  depthBuffer: false,
  stencilBuffer: false,
})
const rt_camara = new T.PerspectiveCamera(75, rtWidth/rtHeight)
rt_camara.position.z = 4
const rt_scene = new T.Scene()
rt_scene.background = new T.Color('red')


const scene = new T.Scene()
const camara = new T.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

const box_geometry = new T.BoxGeometry(1,1,1)
const box_material = new T.MeshBasicMaterial({color:'pink'})
const mesh_box = new T.Mesh(box_geometry, box_material)
scene.add(mesh_box)
rt_scene.add(mesh_box)

function animation(time) {
  const tiempo = time*0.001

  mesh_box.rotation.y = tiempo
  mesh_box.rotation.z = tiempo

  resizeRendererToDisplaySize(renderer)
  
  //renderer.setRenderTarget(render_target)
  renderer.render(scene, camara)
  //renderer.setRenderTarget(null)
  requestAnimationFrame(animation)
}

animation()
import * as T from 'three'
import resizeRendererToDisplaySize from '../resize'

const canvas = document.getElementById('c')
const renderer = new T.WebGLRenderer({
  canvas,
  logarithmicDepthBuffer: true,
  alpha: false,
  antialias: true,
  preserveDrawingBuffer: true
})

const scene = new T.Scene()
const camara = new T.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
camara.position.z = 4

const box_geometry = new T.BoxGeometry(1,1,1)
const box_material = new T.MeshBasicMaterial({color:'pink'})
const mesh_box = new T.Mesh(box_geometry, box_material)
scene.add(mesh_box)

function animation(time) {
  const tiempo = time*0.001

  mesh_box.rotation.y = tiempo
  mesh_box.rotation.z = tiempo

  resizeRendererToDisplaySize(renderer)
  renderer.render(scene, camara)
  requestAnimationFrame(animation)
}

animation()
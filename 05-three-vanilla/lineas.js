import * as THREE from 'three'
import './style.css'

const render_linea = new THREE.WebGLRenderer()
render_linea.setSize(window.innerWidth/3, window.innerHeight/3 );
document.body.appendChild( render_linea.domElement );
const camara = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500)
camara.position.set(0,0,100)
camara.lookAt(0,0,0)

const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial( { color: 0xffff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add(line)

function render_scene() {
  requestAnimationFrame(render_scene)
  line.rotation.y += 0.01;
  line.rotation.x += 0.01;
  render_linea.render(scene, camara)
}

render_scene()
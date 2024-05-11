import * as THREE from 'three'
import './style.css'

const render_linea = new THREE.WebGLRenderer()
render_linea.setSize(window.innerWidth/1, window.innerHeight/1 );
document.body.appendChild( render_linea.domElement );
const camara = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500)
camara.position.set(0,0,100)
camara.lookAt(0,0,0)

const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial( { color: 0xfffffff, alphaHash: true } );// supongo que se puede cambiar a una linea de trazo para un aspecto de dibujo
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 0, 10 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( 20, 1, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const linea_practica = new THREE.Line( geometry, material );

//const cubo = new THREE.Mesh( geometry, material );
//new THREE.MeshBasicMaterial( { color: 0x00ff }
const cubo = new THREE.Mesh( new THREE.BoxGeometry( 10,10, 10),  new THREE.MeshNormalMaterial());

scene.add(cubo)
scene.add(linea_practica)

const light = new THREE.AmbientLight( 0x404040 ); // soft white light

scene.add( light );

function render_scene() {
  requestAnimationFrame(render_scene)
  linea_practica.rotation.x += 0.01;
  linea_practica.rotation.y += 0.01;
  cubo.rotation.y += 0.01;
  cubo.rotation.x += 0.01;
  render_linea.render(scene, camara)
}

render_scene()
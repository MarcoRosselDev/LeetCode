console.log('hola');

import * as THREE from 'three'
import './style.css'


const canvas = document.querySelector('#c')
    
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
const camara = new THREE.PerspectiveCamera(90, 2, 0.1, 7)
camara.position.z = 2

const scene = new THREE.Scene()
/* const geometria  = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({color: 'pink'}) // no lo afecta la luz direccional
const material = new THREE.MeshPhongMaterial({color: 0x44aa88}); // si no hay luz no se ve un carajo
const box = new THREE.Mesh(geometria, material)
scene.add(box) */


const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
//renderer.render(scene, camara)

let cubos = []
function add_cubo(color, posicion_x) {
  const cubo = new THREE.BoxGeometry(1,1,1)
  const material = new THREE.MeshPhongMaterial({color})
  const mesh = new THREE.Mesh(cubo, material)
  scene.add(mesh)
  mesh.position.x = posicion_x
  cubos.push(mesh)
  return mesh
}

add_cubo(0x44aa88,  -2)
add_cubo(0x8844aa,  0)
add_cubo(0xaa8844,  2)



/* function render(time) {
  time *= 0.001
  cubos.forEach(item => {
    item.rotation.x = time
    item.rotation.y = time
  })
  renderer.render(scene, camara)
  requestAnimationFrame(render)
}
render()
*/

/* function render(time) {
  time *= 0.001;  // convert time to seconds
 
  box.rotation.x = time;
  box.rotation.y = time;
 
  renderer.render(scene, camara);
 
  requestAnimationFrame(render);
}
requestAnimationFrame(render); */


function render_2(tiempo) {
  tiempo *= 0.001
  cubos.forEach((cube, ndx) => {
    const speed = 1 + ndx * .1;
    const rot = tiempo * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });
  renderer.render(scene, camara)
  requestAnimationFrame(render_2)
}

render_2()
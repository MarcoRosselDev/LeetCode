console.log('hola mundo');

import './style.css'
import * as THREE from 'three'


function main() {
  //const c = document.querySelector('#c')
  const c = document.querySelector('.c')
  console.log(c);
  const rendereer = new THREE.WebGLRenderer({antialias: true, c});
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 50)
  //const rendereer = new THREE.WebGLRenderer({antialias: true, c})
  
  camera.position.z = 2
  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
  const geometria = new THREE.BoxGeometry(1, 1, 1)//
  const cubo = new THREE.Mesh(geometria, material)
  console.log(cubo);
  const scene = new THREE.Scene()
  scene.add(cubo)
  rendereer.render(scene, camera)
  console.log('main');
}

main()




//console.log(rendereer.render); 
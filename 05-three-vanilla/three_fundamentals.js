console.log('hola mundo');

import './style.css'
import * as THREE from 'three'


function main() {
  //const c = document.querySelector('#c')
  const canvas = document.querySelector('.c')// no puedo llamar de otra forma a esta variable

  const renderer = new THREE.WebGLRenderer({antialias: true, canvas});// si a canvas lo llamo c no funka
  const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 7)
  camara.position.z = 2
  //const rendereer = new THREE.WebGLRenderer({antialias: true, c})
  const scene = new THREE.Scene()
  
  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
  const geometria = new THREE.BoxGeometry(1, 1, 1)//
  const cubo = new THREE.Mesh(geometria, material)
  scene.add(cubo)
  renderer.render(scene, camara)
  console.log('main');
}

main()




//console.log(rendereer.render); 
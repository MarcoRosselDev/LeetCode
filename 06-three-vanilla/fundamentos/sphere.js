import './style.css'

import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize.js'

//const canvas = document.getElementById('c')
const canvas  = document.getElementById('c')
//const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const scena = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 70)
camara.position.set(0, 10, 0);
camara.up.set(0, 0, 1);
camara.lookAt(0, 0, 0);
//camara.position.z = 2

// sphera geeometria
const radius =  1;  
const widthSegments = 7;  
const heightSegments = 7;  
const geometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
//const material_sphera = new THREE.MeshPhongMaterial()
const sunMesh = new THREE.Mesh(geometry, sunMaterial)
sunMesh.scale.set(5, 5, 5);  // make the sun large
scena.add(sunMesh)

const objects = [];
 
// use just one sphere for everything
 
//const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
//scene.add(sunMesh);
objects.push(sunMesh);

//luz
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.PointLight(color, intensity);
scena.add(light);
//const luz = new THREE.AmbientLight('white', 2)
//scena.add(luz)

function re_render(time) {
  const tiempo = time*0.001
  //objects.forEach((obj) => {
  // obj.rotation.y = tiempo;
  //});
  //sunMesh.rotation.x = tiempo
  sunMesh.rotation.y = tiempo

  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  
  renderer.render(scena, camara)
  resizeRendererToDisplaySize(renderer)
  requestAnimationFrame(re_render)
}

re_render()
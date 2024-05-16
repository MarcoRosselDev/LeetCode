import '../style.css'
import * as THREE from 'three'
import resizeRendererToDisplaySize from '../resize.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 30)
//camara.position.z = 2
//cambioes en la camara para verlos desde arriba
camara.position.set(0, 30, 0);
camara.up.set(0, 0, 1);
camara.lookAt(0, 0, 0);

// objeto 3d para ayudar a las escalas de los objetos
const sistema_solar = new THREE.Object3D()
// geometria de esfera basica
const sphera = new THREE.SphereGeometry(1, 7,7,7)
// Sol------------------------------------------------------------
const material_sol = new THREE.MeshPhongMaterial({emissive: 0xFFFF00})
const mesh_sol = new THREE.Mesh(sphera, material_sol)
//mesh_sol.scale.set(1,1,1)
mesh_sol.scale.set(5, 5, 5)
sistema_solar.add(mesh_sol)

// Tierra---------------------------------------------------------
const material_tierra = new THREE.MeshPhongMaterial({emissive: 'blue'})
const mesh_tierra = new THREE.Mesh(sphera, material_tierra)
mesh_tierra.position.x = 9
sistema_solar.add(mesh_tierra)
// objeto 3d tierra---
const sistema_tierra = new THREE.Object3D()
sistema_tierra.position.x = 9
sistema_solar.add(sistema_tierra)

// luz desde el sol
const color = 0xFFFFFF;
const intensity = 20;
const light = new THREE.PointLight(color, intensity);
scene.add(light);

// Luna-------------------------------------------------------------
const material_luna = new THREE.MeshPhongMaterial({emissive: 'grey'})
const mesh_luna = new THREE.Mesh(sphera, material_luna)
mesh_luna.position.x = 3
mesh_luna.scale.set(0.5, .5, .5)
sistema_tierra.add(mesh_luna)

scene.add(sistema_solar)

function frame(time) {
  const tiempo = time*0.001
  sistema_solar.rotation.y = tiempo
  mesh_tierra.rotation.y = tiempo
  sistema_tierra.rotation.y = tiempo
  mesh_luna.rotation.y = tiempo

  // refrescar pixel aspect si se modifica el tamagnio de la pantalla
  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  resizeRendererToDisplaySize(renderer)

  renderer.render(scene, camara)
  requestAnimationFrame(frame)
}

frame()
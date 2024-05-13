import * as THREE from 'three'
import resizeRendererToDisplaySize from './resize'
import './style.css'

const canvas  = document.getElementById('c')

const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 5)
camara.position.z = 2
const escena = new THREE.Scene()

const geometria_cubo = new THREE.BoxGeometry(1, 1, 1)
//const material_cubo = new THREE.MeshBasicMaterial({color: 'lightblue'})
const material_cubo = new THREE.MeshPhongMaterial({color: 'blue'}) 
const cubo_mesh = new THREE.Mesh(geometria_cubo, material_cubo)
escena.add(cubo_mesh)
//const luz = new THREE.DirectionalLight('white', 10)
const luz = new THREE.AmbientLight()
luz.position.set = [0,0,0] 
escena.add(luz)


function rotar_cubo(tiempo) {
  tiempo *= 0.001
  cubo_mesh.rotation.x = tiempo
  cubo_mesh.rotation.y = tiempo

  camara.aspect = canvas.clientWidth / canvas.clientHeight;
  camara.updateProjectionMatrix();
  renderer.render(escena, camara)
  resizeRendererToDisplaySize(renderer)  
  requestAnimationFrame(rotar_cubo)
}

rotar_cubo()

/* function render_2(tiempo) {
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

render_2() */
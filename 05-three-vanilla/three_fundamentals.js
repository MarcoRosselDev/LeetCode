console.log('hola mundo');

import './style.css'
import * as THREE from 'three'

const c = document.querySelector('#c')

const rendereer = new THREE.WebGLRenderer({antialias: true, c})

const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 5)
camara.position.z = 2

const scena = new THREE.Scene()
const material = new THREE.MeshBasicMaterial({color: 0x44aa88})
const geometria = new THREE.BoxGeometry(1, 1, 1)//
const cubo = new THREE.Mesh(geometria, material)
scena.add(cubo)


rendereer.render(scena, camara)

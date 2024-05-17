import * as THREE from 'three'
import './style.css'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})
const scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(75, 2, 0.1, 20)
camara.position.z = 4

const esfera = new THREE.SphereGeometry(2, 10, 10, 10)
const basic_material = new THREE.MeshBasicMaterial()
const mesh_basic_material = new THREE.Mesh(esfera, basic_material)

scene.add(mesh_basic_material)

renderer.render(scene, camara)
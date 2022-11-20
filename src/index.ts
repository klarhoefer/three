// import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
// import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0xbbbbff);

const light = new THREE.DirectionalLight(0xcccccc);
light.position.set(100, 100, 100);
scene.add(light);

const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const material = new THREE.MeshNormalMaterial({  });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
controls.update();

const animate = function () {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    controls.update();

    renderer.render(scene, camera);
};

animate();
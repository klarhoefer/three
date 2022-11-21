
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
})

renderer.setClearColor(0xbbbbff);

const light = new THREE.DirectionalLight(0xcccccc);
light.position.set(100, 100, 100);
scene.add(light);

const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
// const material = new THREE.MeshNormalMaterial({  });
const material = new THREE.MeshStandardMaterial({ color: 0x7777ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const loader = new GLTFLoader();

// i.e. https://kibotics.org/static/websim/assets/models/
// intitle:index.of?gltf

loader.load('./red_drone.gltf', gltf => {
    gltf.scene.position.y += 2
	scene.add(gltf.scene);
}, undefined, error => {
	console.error(error);
});

camera.position.z = 5;
camera.position.y = 2;
controls.update();

function animate(time?: DOMHighResTimeStamp) {
    requestAnimationFrame(animate);
    
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate()

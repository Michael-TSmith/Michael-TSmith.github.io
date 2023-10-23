//Three is the canvas display for 3D Models.
import * as THREE from "three";
import { ObjectLoader } from "three";

window.onload = function () {
  loadGeometry();

}

window.onresize = function(){
  loadGeometry();
}

let loadGeometry = function() {
  //Initialize rendering components
  const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas")}); 
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,);
  const scene = new THREE.Scene();

  //create Geometry for Homepage display
  const geometry = new THREE.TorusKnotGeometry(10, 3, 64, 8, 2, 3);
  const material = new THREE.MeshBasicMaterial({color: 0x01cdff, wireframe: true});
  const torus = new THREE.Mesh(geometry, material);

  //call functions
  loadScene();
  animate();


  function loadScene(){
    //renderer settings
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.render(scene, camera);
    
    //Camera position settings
    camera.position.set(0, 0, 28);
    camera.lookAt(0, 0, 0);

    //add scene and play
    scene.add(torus);
    scene.background = new THREE.Color(0x002140);
  }


  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.009;
  }

}

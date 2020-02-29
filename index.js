var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0xCD1AF2 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

var geometry = new THREE.BoxGeometry(3, 3, 3)
var material = new THREE.MeshBasicMaterial({
    color: "#1a3ff2",
    wireframe: true,
    transparent: true
})
var wireframeCube = new THREE.Mesh(geometry, material)
scene.add(wireframeCube)

var geometry = new THREE.BoxGeometry(4, 4, 4)
var material = new THREE.MeshBasicMaterial({
    color: "#1c3ae2",

    wireframe: true,

    transparent: true

})

var wireframeCube2 = new THREE.Mesh(geometry, material)
scene.add(wireframeCube2)

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;

    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;

    wireframeCube2.rotation.x += 0.01;
    wireframeCube2.rotation.y += 0.01;
    renderer.render(scene, camera);

}
animate()
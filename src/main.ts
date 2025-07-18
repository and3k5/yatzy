import "./assets/main.css";

import * as THREE from "three";
import { createState as createDiceState } from "./states/dices";
import type { AnimationTask } from "./animation";
import createIntervalHelper from "./utils/interval-helper";
import { createPointerListener } from "./utils/pointer";

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
const animations: AnimationTask[] = [];

init();

function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4;

    scene = new THREE.Scene();

    const texture = new THREE.TextureLoader().load("textures/crate.svg");
    texture.colorSpace = THREE.SRGBColorSpace;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    const diceState = createDiceState(renderer);

    diceState.init(animations);

    diceState.attach(scene);

    diceState.arrange();

    setInterval(() => diceState.randomize(), 1000);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);

    createPointerListener(camera, renderer, scene);

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

const logInterval = createIntervalHelper(500).off();

function animate() {
    camera.position.x = Math.sin(Date.now() * 0.001) * 0.5;
    camera.position.y = Math.cos(Date.now() * 0.001) * 1;
    camera.lookAt(scene.position);

    const removals: AnimationTask[] = [];

    for (const task of animations) {
        if (task.done) {
            removals.push(task);
            continue;
        }
        const { done } = task.run();
        if (done) {
            removals.push(task);
        }
    }

    if (logInterval.shouldLog()) {
        logInterval.markExecution();
        console.debug("Ran " + animations.length + " animation tasks");
        console.debug(" - " + removals.length + " of them where done");
    }

    removals.forEach((x) => animations.splice(animations.indexOf(x), 1));

    renderer.render(scene, camera);
}

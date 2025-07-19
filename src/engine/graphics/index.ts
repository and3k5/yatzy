import type { AnimationTask } from "@/engine/graphics/animation";
import createIntervalHelper from "@/utils/interval-helper";
import { createPointerListener } from "@/engine/graphics/pointer-listener";
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4;
    return camera;
}

export function initGraphics() {
    const camera = createCamera();

    const animations: AnimationTask[] = [];

    const scene = new Scene();

    const renderer = new WebGLRenderer({ antialias: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const animate = createAnimate(camera, scene, renderer, animations);
    renderer.setAnimationLoop(animate);

    createPointerListener(camera, renderer, scene);

    return {
        renderer,
        scene,
        camera,
        animations,
    };
}

const logInterval = createIntervalHelper(500).off();

function createAnimate(
    camera: Camera,
    scene: Scene,
    renderer: WebGLRenderer,
    animations: AnimationTask[],
) {
    return function () {
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
    };
}

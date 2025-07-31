import type { AnimationTask } from "@/engine/graphics/animation";
import { createPointerListener } from "@/engine/graphics/pointer-listener";
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import type { StateController } from "../states/base";

function createCamera() {
    const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4;
    return camera;
}

export function initGraphics(canvas: HTMLCanvasElement | OffscreenCanvas | undefined) {
    const camera = createCamera();

    const animations: AnimationTask[] = [];

    const scene = new Scene();

    const renderer = new WebGLRenderer({ antialias: true, canvas: canvas });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const ctrl: { value: StateController | null } = { value: null };
    const animate = createAnimate(camera, scene, renderer, animations, ctrl);
    renderer.setAnimationLoop(animate);

    createPointerListener(camera, renderer, scene);

    return {
        renderer,
        scene,
        camera,
        animations,
        setController(c: StateController) {
            ctrl.value = c;
        },
    };
}

function createAnimate(
    camera: Camera,
    scene: Scene,
    renderer: WebGLRenderer,
    animations: AnimationTask[],
    ctrl: { value: StateController | null },
) {
    let lookTarget = scene.position;
    let cameraPosition = camera.position.clone();
    return function () {
        const cLookTarget = ctrl.value?.currentState?.scenePosition ?? scene.position;

        const cameraTargetPosition = cLookTarget.clone().setZ(camera.position.z);

        cameraPosition = cameraPosition.clone().lerp(cameraTargetPosition, 0.125);

        camera.position.x = cameraPosition.x + Math.sin(Date.now() * 0.001) * 0.5;
        camera.position.y = cameraPosition.y + Math.cos(Date.now() * 0.001) * 1;

        lookTarget = lookTarget.clone().lerp(cLookTarget, 0.125);

        // console.log(`Camera position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z} looking at ${lookTarget.x}, ${lookTarget.y}, ${lookTarget.z}`);
        // console.log(`Target position: ${cameraTargetPosition.x}, ${cameraTargetPosition.y}, ${cameraTargetPosition.z} looking at ${cLookTarget.x}, ${cLookTarget.y}, ${cLookTarget.z}`);

        camera.lookAt(lookTarget);

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

        removals.forEach((x) => animations.splice(animations.indexOf(x), 1));

        renderer.render(scene, camera);
    };
}

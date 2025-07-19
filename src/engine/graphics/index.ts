import type { AnimationTask } from "@/engine/graphics/animation";
import { createPointerListener } from "@/engine/graphics/pointer-listener";
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import type { createStateController } from "../states/base";

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

    const ctrl: { value: ReturnType<typeof createStateController> | null } = { value: null };
    const animate = createAnimate(camera, scene, renderer, animations, ctrl);
    renderer.setAnimationLoop(animate);

    createPointerListener(camera, renderer, scene);

    return {
        renderer,
        scene,
        camera,
        animations,
        setController(c: ReturnType<typeof createStateController>) {
            ctrl.value = c;
        },
    };
}

function createAnimate(
    camera: Camera,
    scene: Scene,
    renderer: WebGLRenderer,
    animations: AnimationTask[],
    ctrl: { value: ReturnType<typeof createStateController> | null },
) {
    return function () {
        camera.position.x =
            (ctrl.value?.currentState?.scenePosition?.x ?? 0) + Math.sin(Date.now() * 0.001) * 0.5;
        camera.position.y =
            (ctrl.value?.currentState?.scenePosition?.x ?? 0) + Math.cos(Date.now() * 0.001) * 1;
        camera.lookAt(ctrl.value?.currentState?.scenePosition ?? scene.position);

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

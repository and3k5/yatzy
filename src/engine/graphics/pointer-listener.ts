import {
    Object3D,
    PerspectiveCamera,
    Raycaster,
    Scene,
    Vector2,
    WebGLRenderer,
    type Intersection,
    type Object3DEventMap,
} from "three";

export interface EventMap extends Object3DEventMap {
    pointerover: object;
    pointerout: object;
    pointermove: object;
    click: object;
}

export function createPointerListener(
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    scene: Scene,
) {
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const hovered: { [str: string]: Intersection<Object3D<EventMap>> } = {};
    let intersects: Intersection<Object3D<EventMap>>[] = [];

    window.addEventListener("pointermove", (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        mouse.set((e.clientX / width) * 2 - 1, -(e.clientY / height) * 2 + 1);
        raycaster.setFromCamera(mouse, camera);
        intersects = raycaster.intersectObjects(scene.children, true);

        // If a previously hovered item is not among the hits we must call onPointerOut
        Object.keys(hovered).forEach((key) => {
            const hit = intersects.find((hit) => hit.object.uuid === key);
            if (hit === undefined) {
                const hoveredItem = hovered[key];
                hoveredItem.object.dispatchEvent({
                    type: "pointerout",
                });
                delete hovered[key];
            }
        });

        intersects.forEach((hit) => {
            // If a hit has not been flagged as hovered we must call onPointerOver
            if (!hovered[hit.object.uuid]) {
                hovered[hit.object.uuid] = hit;
                hit.object.dispatchEvent({
                    type: "pointerover",
                });
            }
            // Call onPointerMove
            hit.object.dispatchEvent({
                type: "pointermove",
            });
        });
    });

    window.addEventListener("click", () => {
        intersects.forEach((hit) => {
            hit.object.dispatchEvent({
                type: "click",
            });
        });
    });
}

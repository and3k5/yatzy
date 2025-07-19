import { initGraphics } from "./engine/graphics";
import { createStates } from "./engine/states";
export function createGame(canvas: HTMLCanvasElement | OffscreenCanvas | undefined) {
    const { renderer, scene, animations } = initGraphics(canvas);
    createStates(renderer, animations, scene);
}

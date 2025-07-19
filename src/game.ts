import { initGraphics } from "./engine/graphics";
import { createStates } from "./engine/states";
export function createGame(canvas: HTMLCanvasElement | OffscreenCanvas | undefined) {
    console.debug("init game with canvas: " + canvas);
    const { renderer, scene, animations } = initGraphics(canvas);
    createStates(renderer, animations, scene);
}

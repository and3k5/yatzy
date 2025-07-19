import { initGraphics } from "./engine/graphics";
import { createStates } from "./engine/states";
export function createGame(canvas: HTMLCanvasElement | OffscreenCanvas | undefined) {
    const { renderer, scene, animations, setController } = initGraphics(canvas);

    const { ctrl } = createStates(renderer, animations, scene);
    setController(ctrl);
}

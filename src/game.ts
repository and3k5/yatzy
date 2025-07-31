import { initGraphics } from "./engine/graphics";
import type { Game } from "./engine/logic/game";
import { createStates } from "./engine/states";
export function createGame(canvas: HTMLCanvasElement | OffscreenCanvas | undefined) {
    const { renderer, scene, animations, setController } = initGraphics(canvas);

    const { ctrl } = createStates(renderer, animations, scene);
    setController(ctrl);

    return {
        startGame(game: Game) {
            game.setController(ctrl);
            game.nextPlayer();
        },
    };
}

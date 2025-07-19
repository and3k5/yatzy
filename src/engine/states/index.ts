import type { WebGLRenderer, Scene } from "three";
import type { AnimationTask } from "../graphics/animation";
import { createState as createDiceState } from "./dices";

export function createStates(renderer: WebGLRenderer, animations: AnimationTask[], scene: Scene) {
    const diceState = createDiceState(renderer);

    diceState.init(animations);
    diceState.attach(scene);

    diceState.enter();

    return {
        diceState,
    };
}

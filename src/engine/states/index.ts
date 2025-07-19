import type { WebGLRenderer, Scene } from "three";
import type { AnimationTask } from "../graphics/animation";
import { createState as createDiceState } from "./dices";
import { createStateController } from "./base";
//import { createState as createBoardState } from "./board";

export function createStates(renderer: WebGLRenderer, animations: AnimationTask[], scene: Scene) {
    const ctrl = createStateController(animations, scene);

    const diceState = ctrl.addState(createDiceState(renderer));
    //const boardState = ctrl.addState(createBoardState());

    ctrl.enter(diceState);

    return {
        diceState,
    };
}

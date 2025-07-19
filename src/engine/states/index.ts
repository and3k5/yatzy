import type { WebGLRenderer, Scene } from "three";
import type { AnimationTask } from "../graphics/animation";
import { createState as createDiceState } from "./dices";
import { createStateController } from "./base";
import { createState as createBoardState } from "./board";
import { getPos } from "./relative-position";

export function createStates(renderer: WebGLRenderer, animations: AnimationTask[], scene: Scene) {
    const ctrl = createStateController(animations, scene);

    const diceState = ctrl.addState(
        createDiceState(renderer, () => ctrl.enter(boardState)),
        getPos(0),
    );
    const boardState = ctrl.addState(
        createBoardState(() => ctrl.enter(diceState)),
        getPos(1),
    );

    ctrl.enter(diceState);

    return {
        ctrl,
    };
}

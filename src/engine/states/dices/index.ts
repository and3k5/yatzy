import type { AnimationTask } from "@/engine/graphics/animation";
import { createDice } from "@/objects/dice";
import type { WebGLRenderer } from "three";
import type { GameState } from "../base";
import { useActionsStorage } from "@/engine/actions";

export const NO_OF_DICES = 6;
const DISTANCE = 0.5;

interface DiceGameState extends GameState {
    holdDice(index: number): void;
}
export function createState(renderer: WebGLRenderer, enterBoardState: () => void): DiceGameState {
    const actionStorage = useActionsStorage();
    const dices: ReturnType<typeof createDice>[] = [];

    for (let i = 0; i < NO_OF_DICES; i++) {
        dices.push(createDice());
    }

    const randomizeAction = actionStorage.createAction({
        label: "Roll dice",
        disabled: false,
    });

    randomizeAction.addEventListener("click", () => {
        dices
            .filter((x) => x.hold === false)
            .forEach((x) => {
                x.setValue(1 + Math.round(Math.random() * (NO_OF_DICES - 1)));
            });
    });

    const lookAtBoard = actionStorage.createAction({
        label: "Look at board",
        disabled: false,
    });

    lookAtBoard.addEventListener("click", () => {
        enterBoardState();
    });

    return {
        init(a: AnimationTask[]) {
            dices.forEach((x, i) => {
                x.init(a, renderer);
                x.setValue(i + 1);
            });
            dices.forEach((dice, i) => {
                dice.mesh.position.x = i % 2 === 1 ? DISTANCE : -DISTANCE;
                dice.mesh.position.y = 0 - DISTANCE * 2 + Math.floor(i / 2) * DISTANCE * 2;
            });
        },
        enter() {
            randomizeAction.visible = true;
            lookAtBoard.visible = true;
        },
        leave() {
            randomizeAction.visible = false;
            lookAtBoard.visible = false;
        },
        holdDice(index: number) {
            dices[index].hold = !dices[index].hold;
        },
        attach(scene, scenePosition) {
            dices.forEach((x) => {
                x.mesh.position.x += scenePosition.x;
                x.mesh.position.y += scenePosition.y;
                x.mesh.position.z += scenePosition.z;
                scene.add(x.mesh);
            });
        },
    };
}

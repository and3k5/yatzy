import type { AnimationTask } from "@/engine/graphics/animation";
import { createDice } from "@/objects/dice";
import type { Scene, WebGLRenderer } from "three";
import type { GameState } from "../base";

export const NO_OF_DICES = 6;
const DISTANCE = 0.5;

interface DiceGameState extends GameState {
    holdDice(index: number): void;
    randomize(): void;
}
export function createState(renderer: WebGLRenderer): DiceGameState {
    const dices: ReturnType<typeof createDice>[] = [];

    for (let i = 0; i < NO_OF_DICES; i++) {
        dices.push(createDice());
    }

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
        },
        leave() {
        },
        randomize() {
            dices
                .filter((x) => x.hold === false)
                .forEach((x) => {
                    x.setValue(1 + Math.round(Math.random() * (NO_OF_DICES - 1)));
                });
        },
        holdDice(index: number) {
            dices[index].hold = !dices[index].hold;
        },
        attach(scene: Scene) {
            dices.forEach((x) => scene.add(x.mesh));
        },
    };
}

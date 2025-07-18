import type { AnimationTask } from "@/animation";
import { createDice } from "@/objects/dice";
import type { Scene } from "three";

export const NO_OF_DICES = 6;

export function createState() {
    const dices: ReturnType<typeof createDice>[] = [];

    for (let i = 0; i < NO_OF_DICES; i++) {
        dices.push(createDice());
    }

    return {
        init(a: AnimationTask[]) {
            dices.forEach((x, i) => {
                x.init(a);
                x.setValue(i + 1);
            });
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
        arrange() {
            dices.forEach((dice, i) => {
                dice.mesh.position.x = i % 2 === 1 ? 1 : -1;
                dice.mesh.position.y = -2 + Math.floor(i / 2) * 2;
            });
        },
    };
}

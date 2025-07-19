import type { Scene } from "three";
import type { AnimationTask } from "../graphics/animation";

export interface GameState {
    init(a: AnimationTask[]): void;
    attach(scene: Scene): void;
    enter(): void;
    leave(): void;
}

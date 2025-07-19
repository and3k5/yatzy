import type { Scene, Vector3 } from "three";
import type { AnimationTask } from "../graphics/animation";

export interface GameState {
    init(a: AnimationTask[]): void;
    attach(scene: Scene, scenePosition: Vector3): void;
    enter(): void;
    leave(): void;
    scenePosition?: Vector3;
}

export function createStateController(a: AnimationTask[], scene: Scene) {
    const states: GameState[] = [];

    return {
        addState<TGameState extends GameState>(state: TGameState, scenePosition: Vector3) {
            states.push(state);
            state.init(a);
            state.attach(scene, scenePosition);
            state.scenePosition = scenePosition;
            return state;
        },
        currentState: null as GameState | null,
        states,
        enter(state: GameState) {
            if (this.currentState) {
                this.currentState.leave();
            }
            this.currentState = state;
            this.currentState.enter();
        },
    };
}

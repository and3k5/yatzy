import type { Scene } from "three";
import type { AnimationTask } from "../graphics/animation";

export interface GameState {
    init(a: AnimationTask[]): void;
    attach(scene: Scene): void;
    enter(): void;
    leave(): void;
}

export function createStateController(a: AnimationTask[], scene: Scene) {
    const states: GameState[] = [];

    let currentState: GameState | null = null;

    return {
        addState<TGameState extends GameState>(state: TGameState) {
            states.push(state);
            state.init(a);
            state.attach(scene);
            return state;
        },
        states,
        enter(state: GameState) {
            if (currentState) {
                currentState.leave();
            }
            currentState = state;
            currentState.enter();
        },
    };
}

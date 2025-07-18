export interface AnimationTask {
    run(): { done: boolean };
    done: boolean;
}

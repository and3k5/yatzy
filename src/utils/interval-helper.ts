export default function createIntervalHelper(interval: number) {
    let lastExec = performance.now();
    return {
        shouldLog() {
            return lastExec + interval < performance.now();
        },
        markExecution() {
            lastExec = performance.now();
        },
        off() {
            return off();
        },
    };
}

export function off(): ReturnType<typeof createIntervalHelper> {
    return {
        shouldLog() {
            return false;
        },
        markExecution() {
            // nothing
        },
        off() {
            return off();
        },
    };
}

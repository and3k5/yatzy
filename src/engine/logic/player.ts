export class Player {
    values: { key: string; value: number }[] = [];
    constructor() {}
    getValue(key: string) {
        return this.values.find((x) => x.key == key)?.value ?? 0;
    }
}

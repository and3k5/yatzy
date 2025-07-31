export class Player {
    values: { key: string; value: number }[] = [];
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getValue(key: string) {
        return this.values.find((x) => x.key == key)?.value ?? 0;
    }
}

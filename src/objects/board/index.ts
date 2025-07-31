import { BoxGeometry, Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { createItem, type ItemBase } from "./item";
import { type CalculationItem } from "./item/calculated-field";
import { type ItemType } from "./item/item-types";

export function createBoard({
    boardWidth,
    boardHeight,
    boardDepth,
}: {
    boardWidth: number;
    boardHeight: number;
    boardDepth: number;
}) {
    // Create a white rectangular board to represent the yatzy paper

    const geometry = new BoxGeometry(boardWidth, boardHeight, boardDepth);
    const material = new MeshBasicMaterial({ color: 0xffffff });
    const mesh = new Mesh(geometry, material);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return {
        items: [] as ItemBase<ItemType>[],
        mesh,
        addCalculatedField(key: string, label: string, calc: CalculationItem["calculation"]) {
            this.items.push(createItem("calculated", { key, label, calculation: calc }));
        },
        addSummaryField(
            key: string,
            label: string,
            filter: (
                value: ItemBase<ItemType>,
                index: number,
                array: ItemBase<ItemType>[],
            ) => boolean,
        ) {
            this.items.push(createItem("summary", { key, label, filter: filter }));
        },
        addField(key: string, label: string) {
            this.items.push(createItem("field", { key, label }));
        },
    };
}

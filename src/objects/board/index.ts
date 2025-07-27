import { BoxGeometry, Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { createItem } from "./item";

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
        items: [] as ReturnType<typeof createItem>[],
        mesh,
        addItem(label: string) {
            this.items.push(createItem(label));
        },
    };
}

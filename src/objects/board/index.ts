import { BoxGeometry, Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { createItem } from "./item";

export function createBoard() {
    // Create a white rectangular board to represent the yatzy paper
    const boardWidth = 8;
    const boardHeight = 12;
    const boardDepth = 0.1;

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

import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";
import { createItem } from "./item";

export function createBoard() {
    // Create a white rectangular board to represent the yatzy paper
    const boardWidth = 8;
    const boardHeight = 12;
    const boardDepth = 0.1;

    const geometry = new BoxGeometry(boardWidth, boardHeight, boardDepth);
    const material = new MeshPhongMaterial({ color: 0xffffff });
    const mesh = new Mesh(geometry, material);

    // Optional: Add a slight bevel or rounded corners for realism (requires extra geometry work)
    mesh.position.set(0, 0, 0);
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

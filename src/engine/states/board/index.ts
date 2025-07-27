import { createBoard } from "@/objects/board";
import type { GameState } from "../base";

import * as labels from "./lang";
import { useActionsStorage } from "@/engine/actions";

const boardWidth = 4;
const boardHeight = 4;
const boardDepth = 0.1;

export function createState(goBackToDices: () => void): GameState {
    const board = createBoard({
        boardWidth: boardWidth,
        boardHeight: boardHeight,
        boardDepth: boardDepth,
    });

    const actionStorage = useActionsStorage();

    const lang = "en";

    const txt = labels[lang]["default"];

    board.addItem(txt["1s"]);
    board.addItem(txt["2s"]);
    board.addItem(txt["3s"]);
    board.addItem(txt["4s"]);
    board.addItem(txt["5s"]);
    board.addItem(txt["6s"]);
    // Sum
    // Bonus
    board.addItem(txt["1pair"]);
    board.addItem(txt["2pairs"]);
    board.addItem(txt["3ofakind"]);
    board.addItem(txt["4ofakind"]);
    board.addItem(txt["low"]);
    board.addItem(txt["high"]);
    board.addItem(txt["house"]);
    board.addItem(txt["chance"]);
    board.addItem(txt["yatzy"]);
    // Total

    const backToDices = actionStorage.createAction({
        label: "Back to dices",
        disabled: false,
    });

    backToDices.addEventListener("click", () => {
        goBackToDices();
    });

    return {
        init() {
            // Initialize the board state
        },
        enter() {
            backToDices.visible = true;
        },
        leave() {
            backToDices.visible = false;
        },
        attach(scene, scenePosition) {
            board.mesh.position.x += scenePosition.x;
            board.mesh.position.y += scenePosition.y;
            board.mesh.position.z += scenePosition.z;
            scene.add(board.mesh);
            const itemCount = board.items.length;
            const itemHeight = boardHeight / (itemCount + 1);
            board.items.forEach((item, index) => {
                const itemMesh = item.mesh;
                itemMesh.position.x = board.mesh.position.x - boardWidth / 2 + itemHeight / 2;
                itemMesh.position.y =
                    board.mesh.position.y - boardHeight / 2 + (itemCount - index) * itemHeight;
                itemMesh.position.z = board.mesh.position.z + 0.1;
                scene.add(itemMesh);
            });
        },
    };
}

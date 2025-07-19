import { createBoard } from "@/objects/board";
import type { GameState } from "../base";

import * as labels from "./lang";
import { useActionsStorage } from "@/engine/actions";

export function createState(goBackToDices: () => void): GameState {
    const board = createBoard();

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
        },
    };
}

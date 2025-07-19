import { createBoard } from "@/objects/board";
import type { GameState } from "../base";

import * as labels from "./lang";

export function createState(): GameState {
    const board = createBoard();

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

    return {
        init() {
            // Initialize the board state
        },
        enter() {
            // Actions to perform when entering the board state
        },
        leave() {
            // Actions to perform when leaving the board state
        },
        attach(scene) {
            scene.add(board.mesh);
        },
    };
}

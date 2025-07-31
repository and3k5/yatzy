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

    const upperLabels = [1, 2, 3, 4, 5, 6].map((x) => x + "s"); // as `${1|2|3|4|5|6}s`[];

    board.addField("1s", txt["1s"]);
    board.addField("2s", txt["2s"]);
    board.addField("3s", txt["3s"]);
    board.addField("4s", txt["4s"]);
    board.addField("5s", txt["5s"]);
    board.addField("6s", txt["6s"]);
    board.addSummaryField("sum", txt["summary"], (x) => upperLabels.includes(x.key));
    board.addCalculatedField("bonus", txt["bonus"], (items, player) => {
        return player.getValue("sum") > 84 ? 50 : 0;
    });
    board.addField("1pair", txt["1pair"]);
    board.addField("2pairs", txt["2pairs"]);
    board.addField("3ofakind", txt["3ofakind"]);
    board.addField("4ofakind", txt["4ofakind"]);
    board.addField("low", txt["low"]);
    board.addField("high", txt["high"]);
    board.addField("house", txt["house"]);
    board.addField("chance", txt["chance"]);
    board.addField("yatzy", txt["yatzy"]);
    board.addSummaryField("total", txt["total"], (item) => item.includeInScore);

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
            const boardTop = board.mesh.position.x - boardWidth / 2;
            const boardLeft = board.mesh.position.y - boardHeight / 2;
            board.items.forEach((item, index) => {
                const itemMesh = item.mesh;
                itemMesh.position.x = boardTop + itemHeight / 2;
                itemMesh.position.y = boardLeft + (itemCount - index) * itemHeight;
                itemMesh.position.z = board.mesh.position.z + 0.1;
                scene.add(itemMesh);
            });
        },
    };
}

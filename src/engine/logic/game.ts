import type { Player } from "./player";

export class Game {
    players: Player[];
    turnIndex = -1;
    diceRollsLeft = 0;
    constructor(players: Player[]) {
        this.players = players;
    }

    get hasDiceRoll() {
        return this.diceRollsLeft > 0;
    }

    nextPlayer() {
        this.turnIndex = (this.turnIndex + 1) % this.players.length;
        this.diceRollsLeft = 3;
    }

    nextStep() {
        if (this.diceRollsLeft == 0) {
            this.nextPlayer();
        } else {
        }
    }
}

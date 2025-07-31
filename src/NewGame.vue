<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="player in players" :key="player.key">
                <input
                    type="text"
                    v-model="player.name"
                    @blur="validatePlayer(player.key)"
                    :class="{
                        'player-name-field': true,
                        ghost:
                            players.length !== 1 &&
                            (('isGhost' in player && player.isGhost) || player.name.trim() === ''),
                    }"
                />
            </div>
        </transition-group>
        <button type="button" class="start-game-button" @click="startGame()">Start game</button>
    </div>
</template>

<style lang="css" scoped>
.player-name-field {
    font-size: 1.2em;
    padding: 0.5em 1em;
    border: 2px solid #4f8cff;
    border-radius: 6px;
    margin-bottom: 0.5em;
    outline: none;
    transition:
        border-color 0.2s,
        box-shadow 0.2s;
    box-shadow: 0 1px 4px rgba(79, 140, 255, 0.08);
    background: #f8fbff;
}

.player-name-field:focus {
    border-color: #38c6ff;
    box-shadow: 0 2px 8px rgba(56, 198, 255, 0.15);
}
.ghost {
    opacity: 0.65;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.start-game-button {
    background: #4f8cff;
    color: #000;
    border: none;
    border-radius: 8px;
    padding: 0.75em 2em;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(79, 140, 255, 0.15);
    transition: background-color 400ms ease-out;
    width: 100%;
}
.start-game-button:hover {
    background-color: #38c6ff;
}
</style>

<script setup lang="ts">
import { ref, watch } from "vue";

type PlayerSetup = { name: string; key: string; isGhost?: boolean };

let keyCnt = 0;

function createPlayer(): PlayerSetup {
    return {
        key: "player_" + keyCnt++,
        name: "",
        isGhost: true,
    };
}

const players = ref<PlayerSetup[]>([createPlayer()]);

function validatePlayer(key: string) {
    const player = players.value.find((p) => p.key === key);
    if (!player) return;
    if (player.name.trim() === "" && !player.isGhost) {
        players.value.splice(players.value.indexOf(player), 1);
    }
}

const emit = defineEmits<{
    (e: "start-game", playerNames: string[]): void;
}>();

function startGame() {
    emit(
        "start-game",
        players.value.filter((x) => !("isGhost" in x)).map((x) => x.name),
    );
}

watch(
    () => players.value,
    (newValue) => {
        const ghostItem = newValue.find((x) => x.isGhost);
        if (ghostItem == null) throw new Error("Invalid case");
        if (ghostItem.name.length > 0) {
            delete ghostItem.isGhost;
            newValue.push(createPlayer());
        }
    },
    {
        deep: true,
    },
);
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createGame } from "./game";
import { useActionsStorage } from "./engine/actions";
import NewGame from "./NewGame.vue";
import { Game } from "./engine/logic/game";
import { Player } from "./engine/logic/player";
const cnvs = ref<HTMLCanvasElement>();

const gameEngine = ref<ReturnType<typeof createGame>>();
const hasGame = ref(false);

const actionStorage = useActionsStorage();

onMounted(() => {
    gameEngine.value = createGame(cnvs.value);
});

function startGame(players: string[]) {
    console.log("start game");
    gameEngine.value!.startGame(new Game(players.map((x) => new Player(x))));
    hasGame.value = true;
}
</script>

<style lang="css" scoped>
.controls {
    padding: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.start-game-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px) brightness(0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.action-btn {
    pointer-events: auto;
    padding: 15px;
    font-size: 15pt;
}
.graphics-canvas {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
}
</style>

<template>
    <div class="controls">
        <template v-for="action in actionStorage.actions">
            <button
                class="action-btn"
                type="button"
                v-if="action.visible"
                :key="action.key"
                @click="action.dispatchEvent({ type: 'click' })"
            >
                {{ action.label }}
            </button>
        </template>
    </div>
    <div class="start-game-overlay" v-if="!hasGame">
        <NewGame @start-game="startGame($event)"></NewGame>
    </div>
    <canvas ref="cnvs" class="graphics-canvas"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createGame } from "./game";
import { useActionsStorage } from "./engine/actions";
const cnvs = ref<HTMLCanvasElement>();

const actionStorage = useActionsStorage();

onMounted(() => {
    createGame(cnvs.value);
});
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
        <button
            class="action-btn"
            type="button"
            v-for="action in actionStorage.actions"
            :key="action.key"
            @click="action.dispatchEvent({ type: 'click' })"
        >
            {{ action.label }}
        </button>
    </div>
    <canvas ref="cnvs" class="graphics-canvas"></canvas>
</template>

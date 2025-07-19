<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createGame } from "./game";
const cnvs = ref<HTMLCanvasElement>();


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
</style>

<template>
    <canvas ref="cnvs"></canvas>
</template>

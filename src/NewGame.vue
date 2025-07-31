<template>
    <div>
        <template v-for="player in players" :key="player.key">
            <div>
                <input
                    type="text"
                    v-model="player.name"
                    @blur="validatePlayer(player.key)"
                    :class="{
                        ghost:
                            players.length !== 1 &&
                            (('isGhost' in player && player.isGhost) || player.name.trim() === ''),
                    }"
                />
            </div>
        </template>
    </div>
</template>

<style lang="css" scoped>
.ghost {
    opacity: 0.65;
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

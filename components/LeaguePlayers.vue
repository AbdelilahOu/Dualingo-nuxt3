<script setup lang="ts">
import { PropType } from "vue";
import { LeaguePlayer } from "~~/types";

defineProps({
  leagueBoard: {
    type: Array as PropType<LeaguePlayer[]>,
    required: true,
  },
});
</script>

<template>
  <PlayerCard
    v-for="(item, index) in leagueBoard.splice(0, 7)"
    :name="item.name"
    :index="index"
    :xp="item.xp"
    :key="index"
  />
  <div
    v-if="leagueBoard.length > 7"
    class="flex text-dualingo items-center justify-center uppercase gap-4 text-base font-bold"
  >
    <img
      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/577cf633b59ce72791f725d0cb973061.svg"
      alt=""
    />
    Promotion zone
    <img
      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/577cf633b59ce72791f725d0cb973061.svg"
      alt=""
    />
  </div>
  <PlayerCard
    v-for="(item, index) in leagueBoard.splice(7, 23)"
    :name="item.name"
    :index="index"
    :xp="item.xp"
    :key="index"
  />
  <div
    v-if="leagueBoard.length > 23"
    class="flex text-red-500 items-center justify-center uppercase gap-4 text-base font-bold"
  >
    <img
      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/248453c5e2d9de19fba7a2f4fef7f016.svg"
      alt=""
    />
    DEmotion zone
    <img
      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/248453c5e2d9de19fba7a2f4fef7f016.svg"
      alt=""
    />
  </div>
  <PlayerCard
    v-for="(item, index) in leagueBoard.splice(23)"
    :name="item.name"
    :index="index"
    :xp="item.xp"
    :key="index"
  />
</template>

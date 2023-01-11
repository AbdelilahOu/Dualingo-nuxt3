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
  <div v-for="(item, index) in leagueBoard">
    <PlayerCard
      :name="item.name"
      :index="index + 1"
      :xp="item.xp"
      :key="index"
    />
    <div
      v-if="index == 6"
      :class="[
        'flex text-dualingo py-4 items-center justify-center uppercase gap-4 text-base font-bold',
        index === 6 ? ' text-dualingo' : index === 22 ? 'text-red-500' : '',
      ]"
    >
      <img
        :src="
          index == 6
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/577cf633b59ce72791f725d0cb973061.svg'
            : index == 22
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/248453c5e2d9de19fba7a2f4fef7f016.svg'
            : ''
        "
        alt=""
      />
      <span>
        {{ index == 6 ? "Promotion zone" : index == 22 ? "DEmotion zone" : "" }}
      </span>
      <img
        :src="
          index == 6
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/577cf633b59ce72791f725d0cb973061.svg'
            : index == 22
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/248453c5e2d9de19fba7a2f4fef7f016.svg'
            : ''
        "
        alt=""
      />
    </div>
  </div>
</template>

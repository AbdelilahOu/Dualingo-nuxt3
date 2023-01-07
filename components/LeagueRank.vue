<script setup lang="ts"></script>

<template>
  <div class="border-2 rounded-2xl flex flex-col gap-5 p-5">
    <div class="flex justify-between items-center">
      <span class="font-bold text-2xl"> {{ "Emerald" }} League </span>
      <nuxt-link
        class="uppercase text-sm font-bold text-sky-500 hover:text-sky-400 duration-150 transition-all"
        to="/LeaderBoards"
      >
        view League
      </nuxt-link>
    </div>
    <div class="pl-1 flex">
      <div>
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/f480e032c5222395e73dac88ce3592bb.svg"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-start pl-5 sticky top-[92px]">
        <span class="font-bold text-lg">
          Your ranked # <span class="text-green-500">{{ 1 }}</span>
        </span>
        <span> Keep it up to stay in top 3! </span>
      </div>
    </div>
  </div>
</template>

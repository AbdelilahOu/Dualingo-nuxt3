<script setup lang="ts">
//
useHead({
  title: "Dualingo",
  link: [
    {
      rel: "icon",
      href: "https://d35aaqx5ub95lt.cloudfront.net/favicon.ico",
    },
  ],
});
//
definePageMeta({
  layout: "home-layout",
});
//
</script>

<template>
  <div class="h-full w-full pl-6">
    <div class="w-full h-full grid gap-6 md:grid-cols-2 lg:grid-cols-a">
      <div class="w-full h-full flex flex-col lg:col-span-6">
        <!-- <UniteCard Unite="1" Title="Describe the weather" /> -->
        <div
          class="w-full h-full grid grid-flow-col grid-cols-5 grid-rows-2 max-h-screen"
        >
          <!-- content -->
        </div>
      </div>
      <div class="hidden md:flex flex-col lg:col-span-4">
        <div class="z-30 sticky top-[92px] flex flex-col gap-5">
          <!-- <LeagueRank />
          <WeeklyStats /> -->
        </div>
      </div>
    </div>
  </div>
</template>

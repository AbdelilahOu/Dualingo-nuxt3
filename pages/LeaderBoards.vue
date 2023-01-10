<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLeagueStore } from "~~/store/leagueStore";

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
const leagueStore = useLeagueStore();
const { leagueBoard } = storeToRefs(leagueStore);
</script>

<template>
  <div class="h-full w-full pl-6">
    <div class="w-full h-full grid gap-6 md:grid-cols-2 lg:grid-cols-a">
      <div class="w-full h-full flex flex-col justify-between lg:col-span-6">
        <Leagues />
        <div class="w-full h-full flex flex-col max-h-screen">
          <div
            class="w-full h-full sticky z-20 top-[68px] bg-white block text-white"
          >
            .
          </div>
          <!-- content -->
          <LeaguePlayers :leagueBoard="leagueBoard" />
        </div>
      </div>
      <div class="hidden md:flex flex-col lg:col-span-4">
        <div class="z-30 sticky top-[92px] flex flex-col gap-5">
          <UserStatus />
        </div>
      </div>
    </div>
  </div>
</template>

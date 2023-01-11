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
        <div class="w-full h-full flex flex-col">
          <h1 class="text-zinc-800 font-bold text-lg pb-6 border-b-2">
            Power-Ups
          </h1>
          <div class="w-full grid h-full grid-cols-1 grid-rows-2">
            <div class="grid grid-cols-[110px_1fr] p-5 h-fit gap-1">
              <div class="w-[100px] h-[100px] flex items-start justify-center">
                <img
                  class="w-[100px] h-[100px]"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/216ddc11afcbb98f44e53d565ccf479e.svg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-2 h-full">
                <div class="flex justify-between">
                  <div
                    class="text-xl h-fit flex flex-wrap xl:flex-row items-center lg:flex-col gap-2 font-bold w-fit"
                  >
                    <div class="pb-1 w-fit">Streak Freeze</div>
                    <div
                      class="uppercase w-fit bg-[#d7ffb8] h-fit text-[#58cc02] rounded-2xl font-bold text-base px-2 py-0"
                    >
                      2 / 2 Equiped
                    </div>
                  </div>
                  <button
                    class="uppercase w-fit h-fit text-sm text-gray-300 font-bold border-2 rounded-2xl text-center py-3 px-8"
                  >
                    EQUIPpEd
                  </button>
                </div>
                <div class="text-gray-400 text-base">
                  Streak Freeze allows your streak to remain in place for one
                  full day of inactivity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex flex-col lg:col-span-4">
        <div class="z-30 sticky top-[92px] flex flex-col gap-5">
          <Transition appear>
            <LeagueRank />
          </Transition>
          <Transition appear>
            <WeeklyStats />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

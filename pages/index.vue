<script setup lang="ts">
import { bird } from "../assets/animations";
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
const courses = ref<number>(0);
let breakSign: number = -1;
const getPositionFromIndex = (index: number): number => {
  if (index % 4 == 0) breakSign = breakSign * -1;
  const position: number[] = [0, 44, 70, 44];
  return position[index % 4] * breakSign;
};

onMounted(() => {
  courses.value = 5;
});

const lesson = 2;
</script>

<template>
  <div class="h-full w-full pl-6">
    <div class="w-full h-full grid gap-6 md:grid-cols-2">
      <div class="w-full h-full flex flex-col">
        <UniteCard Unite="1" Title="Describe the weather" />
        <div
          class="w-full h-full grid grid-flow-col grid-cols-5 grid-rows-2 max-h-screen"
        >
          <div class="col-start-1 col-span-2 grid grid-cols-2 grid-rows-6">
            <div class="row-start-2 row-end-5 col-span-2">
              <client-only>
                <Vue3Lottie :animationData="bird" :speed="1" />
              </client-only>
            </div>
          </div>
          <div
            class="col-start-3 items-center w-full row-span-full grid grid-rows-a"
          >
            <div
              v-for="index in courses"
              :key="index"
              class="relative w-full h-full flex items-center justify-center"
            >
              <div
                :style="`left: ${getPositionFromIndex(index - 1)}px`"
                class="absolute"
              >
                <UiCourseButton
                  :IsActive="index <= lesson"
                  :IsCurrent="index == lesson"
                ></UiCourseButton>
              </div>
            </div>
          </div>
          <div
            class="col-start-4 row-start-2 col-span-2 800 grid grid-cols-2 grid-rows-6"
          >
            <div class="col-span-2 row-span-2">
              <client-only>
                <Vue3Lottie :animationData="bird" :speed="1" />
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex flex-col">
        <div class="z-30 sticky top-[92px] flex flex-col gap-5">
          <LeagueRank />
          <WeeklyStats />
        </div>
      </div>
    </div>
  </div>
</template>

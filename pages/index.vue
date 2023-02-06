<script setup lang="ts">
import { bird, gothic } from "../assets/animations";
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
const courses = ref<number>(16);
let breakSign: number = -1;
const getPositionFromIndex = (index: number): number => {
  if (index % 4 == 0) breakSign = breakSign * -1;
  const position: number[] = [0, 44, 70, 44];
  return position[index % 4] * breakSign;
};

const IsClicked = ref<boolean>(false);
const lesson = 2;
</script>

<template>
  <div class="h-full w-full pl-6">
    <div class="w-full h-full grid gap-6 md:grid-cols-2 lg:grid-cols-a">
      <div class="w-full h-full flex flex-col pt-4 lg:col-span-6">
        <UniteCard Unite="1" Title="Describe the weather" />
        <!--  -->
        <div
          class="w-full h-full grid grid-flow-col pt-4 grid-rows-1 grid-cols-5 max-h-screen"
        >
          <div class="col-start-1 col-span-2 grid grid-rows-a">
            <div class="row-start-2 row-end-5 col-span-2">
              <ClientOnly>
                <Vue3Lottie :animationData="bird" :speed="1" />
              </ClientOnly>
            </div>
          </div>
          <div
            class="col-start-3 items-center w-full row-span-full gap-14 pt-5 lg:gap-7 flex flex-col"
          >
            <div
              v-for="index in courses"
              :key="index"
              class="relative w-full h-full py-2 flex items-center justify-center"
            >
              <div
                :style="`left: ${getPositionFromIndex(index - 1)}px`"
                class="absolute"
              >
                <span cla>
                  <UiCourseButton
                    @onClicked="IsClicked = !IsClicked"
                    :IsClicked="IsClicked"
                    :IsCompleted="index < lesson"
                    :IsCurrent="index == lesson"
                  >
                    <UiCourseButtonSlot :IsDone="index < lesson" />
                  </UiCourseButton>
                </span>
              </div>
            </div>
          </div>
          <div class="col-start-4 col-span-2 grid grid-rows-a">
            <div
              :class="[
                'row-start-6  row-end-10 row-span-3 col-span-2',
                lesson < 6 ? 'grayscale' : '',
              ]"
            >
              <ClientOnly>
                <Vue3Lottie
                  :autoPlay="lesson > 6"
                  :animationData="gothic"
                  :speed="1"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex flex-col pt-4 lg:col-span-4">
        <div class="z-30 sticky flex top-4 flex-col gap-5">
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

<script setup lang="ts">
import { bird } from "../assets/animations";

definePageMeta({
  layout: "home-layout",
});
</script>

<template>
  <div class="h-fit w-full">
    <div class="w-full h-full grid md:grid-cols-[1fr_300px]">
      <div class="w-full h-full flex flex-col">
        <UniteCard Unite="1" Title="Describe the weather" />
        <div class="w-full h-full grid grid-cols-5 grid-rows-2">
          <div class="col-start-1 col-span-2 grid grid-cols-2 grid-rows-6">
            <div class="row-start-3 row-end-5 col-span-2">
              <client-only>
                <Vue3Lottie :animationData="bird" :speed="1" />
              </client-only>
            </div>
          </div>

          <div
            class="col-start-3 h-full border-x-2 w-full row-span-full flex flex-col"
          >
            <div v-for="(item, index) in 20" :key="index">
              {{ item }}
            </div>
          </div>
          <div
            class="col-start-4 row-start-2 col-span-2 800 grid grid-cols-2 grid-rows-6"
          >
            <div class="row-start-3 row-end-5 col-span-2">
              <client-only>
                <Vue3Lottie :animationData="bird" :speed="1" />
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex flex-col"></div>
    </div>
  </div>
</template>

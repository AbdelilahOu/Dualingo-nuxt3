<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  xp: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full flex h-16 flex-nowrap items-center justify-between rounded-lg py-2 px-5"
  >
    <div class="flex gap-6 w-full items-center justify-start">
      <span class="font-bold"> {{ index }} </span>
      <div class="h-full relative">
        <span
          :class="[
            'transition-all duration-200  border-2 h-8 w-8 bg-white flex items-center justify-center p-[2px] border-gray-200 rounded-[50%_50%_50%_16%] absolute top-[-12px] left-[40px]',
          ]"
        >
          <img src="../assets/svg/german.svg" alt="" />
        </span>
        <span class="h-full w-12">
          <img
            class="rounded-full w-12"
            src="https://simg-ssl.duolingo.com/avatars/566747902/8gKrPP5K8e/xxlarge"
            alt=""
          />
        </span>
        <span
          class="h-4 w-4 border-2 border-white rounded-full bg-green-500 absolute bottom-0 right-0"
        >
        </span>
      </div>
      <h1
        class="font-bold whitespace-nowrap pl-2 w-fit overflow-ellipsis overflow-hidden text-gray-700 text-medium"
      >
        {{ name }}
      </h1>
    </div>
    <span
      class="text font-normal text-lg uppercase whitespace-nowrap text-gray-500"
      >{{ xp }} xp</span
    >
  </div>
</template>

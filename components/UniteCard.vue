<script setup lang="ts">
defineProps({
  Unite: {
    type: String,
  },
  Title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="w-fill bg-green-400 h-fit rounded-xl items-center gap-1 grid-rows-2 py-[22px] px-4 grid grid-cols-[1fr_170px]"
  >
    <div class="font-bold text-2xl text-white">Unite {{ Unite }}</div>
    <div class="text-lg text-white">{{ Title }}</div>
    <div class="col-start-2 row-start-1 row-span-2">
      <button
        style="box-shadow: 0 2px 0 green"
        class="uppercase border-2 flex flex-nowrap rounded-xl px-3 group py-3 font-bold text-white bg-green-400 border-green-700"
      >
        <span class="group-hover:opacity-50 transition-all duration-150">
          <img src="../assets/svg/guide.svg" alt="" />
        </span>
        <span class="ml-3 group-hover:opacity-50 transition-all duration-150">
          GUIDEBOOK
        </span>
      </button>
    </div>
  </div>
</template>

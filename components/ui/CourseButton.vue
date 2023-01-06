<script setup lang="ts">
defineProps({
  IsActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsCurrent: {
    type: Boolean,
    required: true,
    default: false,
  },
  Lessons: {
    type: Number,
  },
});
</script>

<template>
  <button
    :style="`${
      IsActive ? 'box-shadow: 0 8px 0 brown' : 'box-shadow: 0 8px 0 gray'
    }`"
    :class="[
      'w-[70px] h-[60px]  relative  flex items-center rounded-[50%/50%] justify-center',
      IsCurrent ? 'ring-4 ring-offset-8 ring-gray-600' : '',
      IsActive ? 'bg-orange-500' : 'bg-gray-400',
    ]"
  >
    <img class="absolute" src="../../assets/svg/courseStart.svg" alt="" />
  </button>
</template>

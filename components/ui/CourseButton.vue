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
  onLesson: {
    type: Number,
  },
});

const unite = 1;
const course = 4;
const lesson = 2;
const lessons = 6;
</script>

<template>
  <button
    style="box-shadow: 0 8px 0 brown"
    :class="[
      'w-[70px] h-[60px]  relative bg-orange-500 flex items-center rounded-[50%/50%] justify-center',
      IsCurrent ? 'ring-4 ring-offset-8 ring-gray-600' : '',
    ]"
  >
    <img class="absolute" src="../../assets/svg/courseStart.svg" alt="" />
  </button>
</template>

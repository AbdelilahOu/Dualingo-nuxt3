<script setup lang="ts">
defineProps({
  IsCurrent: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsDone: {
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
    :class="[
      IsCurrent ? 'activeCourse' : IsDone ? 'competedCourse' : 'notActive',
    ]"
  >
    <slot v-if="!IsCurrent || IsDone"></slot>
    <img
      v-if="IsCurrent"
      class="absolute"
      src="../../assets/svg/courseStart.svg"
      alt=""
    />
  </button>
</template>

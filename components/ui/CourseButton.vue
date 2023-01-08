<script setup lang="ts">
defineProps({
  IsCurrent: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsCompleted: {
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
      IsCurrent
        ? 'activeCourse buttonCourse'
        : IsCompleted
        ? 'completedCourse buttonCourse'
        : 'notActive',
    ]"
  >
    <slot v-if="!IsCurrent || IsCompleted"></slot>
    <img
      v-if="IsCurrent"
      class="absolute"
      src="../../assets/svg/courseStart.svg"
      alt=""
    />
  </button>
</template>

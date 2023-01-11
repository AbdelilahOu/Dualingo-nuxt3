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
  IsClicked: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <button
    :disabled="!IsCurrent && !IsCompleted"
    @click="$emit('onClicked')"
    :class="[
      IsCurrent
        ? 'activeCourse buttonCourse'
        : IsCompleted
        ? 'completedCourse buttonCourse'
        : 'notActive',
    ]"
  >
    <slot v-if="!IsCurrent || IsCompleted"></slot>
    <div
      class="relative flex items-center justify-center w-full h-full"
      v-if="IsCurrent"
    >
      <transition appear name="start">
        <span
          v-if="!IsClicked"
          class="uppercase absolute -top-10 animate-[bounce_2s_linear_infinite] rounded-[10px] font-bold text-base px-3 py-2 bg-white border-2"
        >
          <span
            class="w-full h-full relative flex text-orange-500 items-center justify-center"
            >Start
            <span
              class="border-r-2 border-b-2 absolute w-3 h-3 rotate-45 -bottom-4 bg-white"
            >
            </span>
          </span>
        </span>
      </transition>
      <img class="absolute" src="../../assets/svg/courseStart.svg" alt="" />
    </div>
  </button>
</template>

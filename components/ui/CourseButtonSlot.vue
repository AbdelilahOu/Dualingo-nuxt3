<script setup lang="ts">
import { buttonGlow } from "../../assets/animations";
defineProps({
  IsDone: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>
<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <div
      v-if="IsDone"
      class="relative h-full w-full flex items-center justify-center"
    >
      <img
        class="absolute"
        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/04c71ff20ffdd493e967aec8fd5a864f.svg"
        alt=""
      />
      <img
        class="absolute"
        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/53727b0c96103443bc616435bb1f2fbc.svg"
        alt=""
      />

      <div class="absolute z-10 top-0 w-full h-full">
        <client-only>
          <Vue3Lottie :animationData="buttonGlow" :speed="1" />
        </client-only>
      </div>
    </div>
    <img
      v-if="!IsDone"
      class="absolute"
      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/09f58d40e31d28e089395af4c54d0c20.svg"
      alt=""
    />
  </div>
</template>

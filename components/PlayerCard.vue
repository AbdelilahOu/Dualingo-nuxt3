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
    class="w-full hover:bg-gray-100 flex h-16 flex-nowrap items-center justify-between rounded-xl py-2 px-5"
  >
    <div class="flex w-full items-center justify-start">
      <img
        class="mr-3"
        v-if="index <= 3"
        :src="
          index === 1
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/9e4f18c0bc42c7508d5fa5b18346af11.svg'
            : index === 2
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/cc7b8f8582e9cfb88408ab851ec2e9bd.svg'
            : index === 3
            ? 'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/eef523c872b71178ef5acb2442d453a2.svg'
            : ''
        "
        alt=""
      />
      <span
        v-else
        class="font-bold mr-3 w-[42px] flex text-center items-center justify-center"
      >
        {{ index }}
      </span>
      <div class="h-full relative">
        <span
          :class="[
            'transition-all duration-200  border-2 h-6 w-6 bg-white flex items-center justify-center p-[2px] border-gray-200 rounded-[50%_50%_50%_16%] absolute top-[-8px] left-[38px]',
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
        class="font-bold ml-5 whitespace-nowrap pl-2 w-fit overflow-ellipsis overflow-hidden text-gray-700 text-medium"
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

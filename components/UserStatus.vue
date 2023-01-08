<script setup lang="ts">
//@ts-ignore
import german from "../assets/svg/german.svg";
const status = [
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/2439bac00452e99ba7bf6a7ed0b04196.svg",
    bg: true,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/2ceb401cae52712705b66a77df83ce40.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/6b8a8db5ac7f847e7e87efe97c8b451a.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/a8e5c18e80054228b2c61168846ff643.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/573de2bc90b2499eeb2b3738cff90133.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/f12703218fc80de76a63e650726f742e.svg",
    bg: true,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/5642e1e72813a88e8973b551a2004c7f.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/beb0df263d0f696bc7095d56b448ca78.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/22df4cb957e6cf2d7198b6e5449a342e.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/9fadb349c2ece257386a0e576359c867.svg",
    bg: false,
  },
  {
    link: "https://d35aaqx5ub95lt.cloudfront.net/images/leagues/535fc27de224cc7d311dbb5de4f33be6.svg",
    bg: false,
  },
  {
    link: german,
    bg: false,
  },
];

const activeStatus = ref({
  link: german,
  bg: false,
});
const IsChanged = ref<boolean>(false);

onMounted(() => {
  watch(
    () => activeStatus.value,
    () => {
      setTimeout(() => {
        IsChanged.value = true;
        setTimeout(() => {
          IsChanged.value = false;
        }, 300);
      }, 200);
    }
  );
});
</script>
<template>
  <div class="border-2 rounded-2xl h-fit flex flex-col gap-4 p-5">
    <div class="flex justify-between items-center">
      <span class="font-bold text-2xl"> Set your status </span>
      <span
        class="uppercase text-sm font-bold text-sky-500 hover:text-sky-400 duration-150 transition-all"
      >
        clear
      </span>
    </div>
    <div class="w-full h-fit relative flex items-center justify-center">
      <div class="w-fit h-fit relative mb-6">
        <span
          :class="[
            'transition-all duration-150  border-2 h-12 w-12 bg-white flex items-center justify-center p-[2px] border-gray-200 rounded-[50%_50%_50%_16%] absolute top-[-12px] left-16',
            IsChanged ? 'scale-125' : '',
            activeStatus.bg ? 'bg-dualingo' : '',
          ]"
        >
          <img :src="activeStatus.link" alt="" />
        </span>
        <img
          class="rounded-full h-20 w-20"
          src="https://simg-ssl.duolingo.com/avatars/566747902/8gKrPP5K8e/xxlarge"
          alt=""
        />
        <span
          class="h-4 w-4 border-2 border-white rounded-full bg-green-500 absolute bottom-0 right-0"
        >
        </span>
      </div>
    </div>
    <div class="grid grid-rows-2 grid-cols-6 gap-2">
      <div
        :class="[
          'cursor-pointer h-12 w-12 border-2 border-b-4 rounded-xl flex items-center justify-center',
          item.link === activeStatus.link
            ? item.bg
              ? 'border-sky-300 bg-dualingo'
              : 'border-sky-300 bg-sky-100'
            : 'border-gray-300 ',
        ]"
        @click="activeStatus = item"
        v-for="(item, index) in status"
        :key="index"
      >
        <img :src="item.link" alt="" />
      </div>
    </div>
  </div>
</template>

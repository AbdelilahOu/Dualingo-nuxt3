<template>
  <div class="border-2 rounded-2xl flex flex-col gap-5 p-5">
    <div class="flex justify-between items-center">
      <span class="font-bold text-2xl"> XP Progress </span>
      <nuxt-link
        class="uppercase text-sm font-bold text-sky-500 hover:text-sky-400 duration-150 transition-all"
        to="/LeaderBoards"
      >
        edit goal
      </nuxt-link>
    </div>
    <div class="pl-1 flex h-24">
      <div class="h-full">
        <img
          class="h-[70px] w-[70px]"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/4eb7c316f1956d8aff95611c08778667.svg"
          alt=""
        />
      </div>
      <div class="flex flex-col w-full justify-center pl-3">
        <span class="text-gray-800"> Daily Goal </span>
        <div class="flex gap-3 flex-nowrap justify-between items-center">
          <span class="w-full h-3 bg-gray-200 rounded-full">
            <span class="w-[50%] h-full rounded-full bg-yellow-400 block">
            </span>
          </span>
          <span class="text-gray-500"> 0/50px </span>
        </div>
      </div>
    </div>
    <div class="w-full h-full"><XpGraph /></div>
  </div>
</template>

<template>
  <div
    class="w-full z-30 sticky top-[92px] border-b-2 h-full pt-3 pb-5 px-5 flex flex-col items-center gap-3 justify-center"
  >
    <div
      class="flex overflow-x-clip h-full w-full justify-center gap-9 pt-3 mb-3"
    >
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/8b3ff5d2a2b0ec2ff7cec8ebd639a5ab.svg"
        alt=""
      />
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/b7c96323c16272efa6794d33791686d2.svg"
        alt=""
      />
      <img
        class="scale-[1.40] mx-2"
        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/f480e032c5222395e73dac88ce3592bb.svg"
        alt=""
      />
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/1b4fb092de75e4ecefd8e92f10b4ddd2.svg"
        alt=""
      />
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/1b4fb092de75e4ecefd8e92f10b4ddd2.svg"
        alt=""
      />
    </div>
    <span class="font-bold text-2xl"> Emerad League </span>
    <div class="flex flex-col items-center">
      <span class="text-gray-700 text-[18px] font-normal"
        >Top 7 advance to the next league</span
      >
      <span class="text-orange-500 font-bold text-lg">
        {{ new Date().getDate() }}
      </span>
    </div>
  </div>
</template>

<template>
  <header
    class="h-full w-full col-span-full sticky z-30 bg-white flex justify-center top-0 px-6 border-b-2"
  >
    <nav
      class="grid h-full w-full max-w-[1320px] grid-rows-1 grid-cols-[1fr_82px_82px_82px_82px] items-center"
    >
      <div class="h-full w-fill flex items-center">
        <div class="h-7 w-32 fill-dualingo pl-4 flex items-center aspect-auto">
          <UiDualingoLogo />
        </div>
      </div>
      <div class="h-full w-full flex items-center cursor-pointer px-[18px]">
        <img src="../assets/svg/german.svg" alt="" />
      </div>
      <div class="h-full w-full flex items-center px-[18px]">
        <span class="flex items-center gap-[6px]">
          <img src="../assets/svg/streak.svg" alt="" />
          <span class="text-[#e5e5e5] font-bold"> 80 </span>
        </span>
      </div>
      <div class="h-full w-full flex items-center px-[18px]">
        <span class="flex items-center gap-[6px]">
          <img src="../assets/svg/daimond.svg" alt="" />
          <span class="text-[#ff4b4b] font-bold"> 200 </span>
        </span>
      </div>
      <div class="h-full w-full flex items-center cursor-pointer px-[18px]">
        <div class="relative rounded-full">
          <img
            class="rounded-full h-9 w-9"
            src="../assets/image/medium.png"
            alt=""
          />
          <img
            class="absolute h-[26px] right-[-12px] bottom-[-5px]"
            src="../assets/svg/notifications.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  </header>
</template>

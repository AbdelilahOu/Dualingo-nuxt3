<template>
  <aside class="w-fit px-6 flex flex-col gap-2">
    <div class="w-[70px] h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/"
      >
        <img class="h-9 w-9" src="../assets/svg/home.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="w-[70px] h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/League"
      >
        <img class="h-9 w-9" src="../assets/svg/league.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="w-[70px] h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/Store"
      >
        <img class="h-9 w-9" src="../assets/svg/store.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="w-[70px] h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="*"
      >
        <img class="h-9 w-9" src="../assets/svg/browse.svg" alt="" />
      </nuxt-link>
    </div>
  </aside>
</template>

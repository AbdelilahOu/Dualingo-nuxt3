<template>
  <aside
    class="w-full h-fit z-30 sticky flex flex-col top-0 pt-4 gap-2 transition-all duration-150"
  >
    <div class="w-full h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex px-3 py-1 items-center group lg:justify-start justify-center gap-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/"
      >
        <img class="h-9 w-9" src="../assets/svg/home.svg" alt="" />
        <span
          class="uppercase group-hover:text-gray-900 transition-all duration-200 font-bold text-base hidden text-gray-500 lg:block"
        >
          Learn
        </span>
      </nuxt-link>
    </div>
    <div class="w-full h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex px-3 py-1 items-center group lg:justify-start justify-center gap-3 rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/LeaderBoards"
      >
        <img class="h-9 w-9" src="../assets/svg/league.svg" alt="" />
        <span
          class="uppercase group-hover:text-gray-900 transition-all duration-200 font-bold text-base hidden text-gray-500 lg:block"
        >
          LEADERBOARDS
        </span>
      </nuxt-link>
    </div>
    <div class="w-full h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex px-3 py-1 items-center group lg:justify-start justify-center gap-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
        to="/Shop"
      >
        <img class="h-9 w-9" src="../assets/svg/store.svg" alt="" />
        <span
          class="uppercase group-hover:text-gray-900 transition-all duration-200 font-bold text-base hidden text-gray-500 lg:block"
        >
          SHOP
        </span>
      </nuxt-link>
    </div>
    <div class="w-full h-14 flex items-center justify-center">
      <nuxt-link
        class="w-full h-full flex px-3 py-1 items-center group lg:justify-start justify-center gap-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
      >
        <img class="h-9 w-9" src="../assets/svg/browse.svg" alt="" />
        <span
          class="uppercase group-hover:text-gray-900 transition-all duration-200 font-bold text-base hidden text-gray-500 lg:block"
        >
          SCHOOLS
        </span>
      </nuxt-link>
    </div>
  </aside>
</template>

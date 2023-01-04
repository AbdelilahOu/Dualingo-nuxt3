<template>
  <div class="h-full w-full grid grid-rows-[64px_1fr]">
    <Navigation />
    <div class="w-full h-full grid grid-rows-1 grid-cols-[70px_1fr_1fr]">
      <aside class="w-[70px] px-6">
        <nuxt-link class="h-9 w-9" to="/">
          <img class="w-full" src="../assets/svg/home.svg" alt="" />
        </nuxt-link>
      </aside>
      <slot />
      <div>sdsdsd</div>
    </div>
  </div>
</template>

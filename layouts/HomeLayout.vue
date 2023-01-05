<template>
  <div class="h-full w-full grid grid-rows-[68px_1fr]">
    <Navigation />
    <div class="w-full h-full flex justify-center">
      <div
        class="w-full h-full max-w-[1320px] grid grid-rows-1 pt-6 grid-cols-[118px_1fr_1fr] lg:grid-cols-[260px_1fr_1fr]"
      >
        <SideNavigation />
        <div class="h-full w-full px-6">
          <slot></slot>
        </div>
        <div class="h-full w-full px-6"></div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="h-full w-full grid grid-rows-[68px_1fr]">
    <Navigation />
    <div class="w-full h-full grid grid-rows-1 pt-6 grid-cols-[118px_1fr_1fr]">
      <SideNavigation />
      <div class="h-full w-full px-6">
        <slot></slot>
      </div>
      <div class="h-full w-full px-6"></div>
    </div>
  </div>
</template>

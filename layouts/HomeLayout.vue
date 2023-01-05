<template>
  <div class="grid md:grid-rows-[68px_1fr] grid-rows-[64px_1fr]">
    <Navigation />
    <div
      class="max-w-[1320px] grid grid-rows-1 pt-6 grid-cols-[118px_1fr] lg:grid-cols-[260px_1fr]"
    >
      <SideNavigation />
      <div class="h-full w-full px-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

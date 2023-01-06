<template>
  <div class="grid grid-rows-[68px_1fr]">
    <Navigation />
    <div class="flex justify-center px-6">
      <div
        class="max-w-[1320px] w-full grid grid-rows-1 pt-6 grid-cols-[70px_1fr] lg:grid-cols-[260px_1fr]"
      >
        <SideNavigation />
        <div class="h-full w-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="flex">
    <!-- <Navigation /> -->
    <div class="flex justify-center px-6">
      <div
        class="max-w-[1320px] w-full grid grid-rows-1 bg-white grid-cols-[70px_1fr] lg:grid-cols-[260px_1fr]"
      >
        <SideNavigation />
        <div class="h-full w-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

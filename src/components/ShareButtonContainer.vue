<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  @apply mt-4
    grid
    grid-cols-2
    gap-4;
}
</style>

<template>
  <div class="grid">
    <slot></slot>
    <div v-if="$slots.sidebar" class="sidebar">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>

<style scoped>
.grid,
.sidebar {
  @apply p-5;
}
.sidebar {
  @apply bg-gray-200
    row-start-1
    overflow-hidden
    lg:col-start-2
    lg:grid-cols-2;
}
</style>

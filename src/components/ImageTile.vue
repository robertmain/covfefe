<template>
  <li
    :class="{ selected: isSelected }"
    role="button"
    :aria-pressed="isSelected ? 'true' : 'false'"
    tabindex="0"
  >
    <img :src="image" :alt="`${name} Trump`" />
    <span>{{ name }}</span>
  </li>
</template>

<script setup lang="ts">
export interface ImageTileProps {
  image: string
  name?: string
  isSelected?: boolean
}
const { name = '', isSelected = false } = defineProps<ImageTileProps>()
</script>

<style scoped>
li {
  @apply grid
    grid-rows-[4fr_auto]
    border
    border-gray-400
    p-1
    bg-gray-200
    text-center;
  &.selected,
  &:hover {
    @apply bg-white
      cursor-pointer;
  }
  &:focus {
    @apply outline outline-2
      outline-blue-600;
  }
  img {
    @apply object-contain
      w-full
      max-h-[75px];
  }

  span {
    @apply font-tinyhand
      text-gray-600
      text-[10px];
  }
}
</style>

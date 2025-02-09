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

<style lang="scss" scoped>
@use '@/assets/style/color.scss';
@use '@/assets/style/spacing.scss';

li {
  background-color: color.$light-grey-1;
  padding: spacing.$sm;
  border: 1px solid color.$light-grey-3;
  text-align: center;
  display: grid;
  grid-template-rows: 4fr min-content;
  &.selected,
  &:hover {
    background-color: white;
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid color.$mid-blue-3;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
}

img {
  max-height: 75px;
}

span {
  font-family: 'Tinyhand';
  font-size: 10px;
  clear: both;
  float: none;
}
</style>

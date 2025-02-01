<template>
  <div :class="{ selected: isSelected }">
    <img :src="image" alt="" /><br />
    <span>{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
interface ImageTileProps {
  image: string
  name?: string
  isSelected?: boolean
}
const { name = '', isSelected = false } = defineProps<ImageTileProps>()
</script>

<style lang="scss" scoped>
div {
  background-color: var(--light-grey-1);
  overflow: hidden;
  padding: var(--spacing-xs);
  border: 1px solid var(--light-grey-3);
  text-align: center;

  &.selected,
  &:hover {
    background-color: white;
    cursor: pointer;
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

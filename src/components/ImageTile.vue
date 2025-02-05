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
@use '@/assets/style/color.scss';
@use '@/assets/style/spacing.scss';

div {
  background-color: color.$light-grey-1;
  overflow: hidden;
  padding: spacing.$sm;
  border: 1px solid color.$light-grey-3;
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

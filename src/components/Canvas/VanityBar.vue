<template>
  <v-rect
    :config="{
      width: width,
      height: height,
      y: y,
      fill: 'rgba(0, 0, 0, 0.9)',
    }"
  />
  <v-text
    :config="{
      text: 'Make your own at',
      x: x + padding,
      y: y + padding * 0.75,
      fill: 'white',
      fontSize: 16,
      fontVariant: 'bold',
    }"
  />
  <v-text
    :config="{
      text: url,
      x: 160,
      y: y + padding * 0.75,
      fill: 'orange',
      fontSize: 16,
      fontVariant: 'bold',
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  x: number
  y: number
  width: number
  height: number
  padding?: number
}
const { x, y, width, height, padding = 20 } = defineProps<Props>()
const url = ref(window.location.href.replace(/https?:\/\//, '').replace(window.location.search, ''))
</script>

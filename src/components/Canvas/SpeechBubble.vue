<template>
  <v-rect :config="{ x: x, y: y, width: width, height: height, fill: fill, cornerRadius: 10 }" />
  <v-line
    :config="{
      points: points,
      fill: fill,
      closed: true,
    }"
  />
  <v-text
    :config="{
      text: `&quot;${text}&quot;`,
      fontFamily: 'TinyHand',
      width: width,
      height: height,
      x: x,
      y: y,
      padding: padding,
      fill: textColor,
      fontSize: textSize,
      lineHeight: 2,
    }"
  ></v-text>
</template>

<script setup lang="ts">
import { useDynamicTextSize } from '@/composables/useDynamicTextSize'
import { GETTERS, useTrumpStore } from '@/stores/trump'
import { computed } from 'vue'

interface Props {
  x: number
  y: number
  width: number
  height: number
  text: string
  padding?: number
  fill?: string
  textColor?: string
}
const {
  x,
  y,
  width,
  height,
  padding = 20,
  fill = 'rgba(255, 255, 255, 0.3)',
  textColor = 'white',
  text = '',
} = defineProps<Props>()

const textSize = useDynamicTextSize(() => text)
const trumpStore = useTrumpStore()
const currentTrump = computed(() => trumpStore[GETTERS.GET_CURRENT_TRUMP]())

/* prettier-ignore */
const points = computed(() => ([
  x - 50, (currentTrump.value.pointerPosition) + padding,
  x, (currentTrump.value.pointerPosition) + padding,
  x, (currentTrump.value.pointerPosition - 50) + padding,
]))
</script>

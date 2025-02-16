<template>
  <ul>
    <ImageTile
      v-for="(trump, index) in trumps"
      :key="trump.image"
      :name="trump.name"
      :image="trump.image"
      :isSelected="index === trumpStore.trumpIndex"
      @click="setTrump(index)"
    />
  </ul>
</template>

<script lang="ts" setup>
import ImageTile from '@/components/ImageTile.vue'
import type { ImageTileProps } from './ImageTile.vue'
import { ACTIONS, useTrumpStore } from '@/stores/trump'

interface TrumpGridProps {
  trumps: ImageTileProps[]
}
const { trumps = [] } = defineProps<TrumpGridProps>()
const trumpStore = useTrumpStore()

const setTrump = (index: number) => {
  trumpStore[ACTIONS.SET_TRUMP](index)
}
</script>

<style scoped>
ul {
  @apply grid
    auto-cols-max
    gap-2
    grid-cols-4;
}
</style>

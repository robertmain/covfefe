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

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-columns: max-content;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  @media (min-width: 500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>

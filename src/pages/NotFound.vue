<template>
  <TrumpCanvas :image="trump.image" :bubble-position="trump.pointerPosition" :speech="pageText" />
</template>
<script lang="ts" setup>
import TrumpCanvas from '@/components/TrumpCanvas.vue'
import { useTextAnimation } from '@/composables/useTextAnimation'
import { useTrumpStore } from '@/stores/trump'
import { computed } from 'vue'
const trumpStore = useTrumpStore()

const trump = computed(() => trumpStore.trumps[1])
const speechText = `This👐 page👌 is missing, 👐folks.🤏 It☝ was 👐stolen ☝by
the👐 woke👐 DEI🤏 fake☝ news👋 media. Everone🖐 is saying it!👋 🤏`

const pageText = useTextAnimation(speechText)
</script>
<style lang="scss" scoped></style>

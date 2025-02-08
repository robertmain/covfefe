<template>
  <div class="grid">
    <trump-canvas
      ref="canvas"
      :image="currentTrump.image"
      :speech="trumpQuote"
      :bubblePosition="currentTrump.pointerPosition"
    ></trump-canvas>

    <div class="sidebar">
      <flexible-heading :level="3">Choose Your Trump</flexible-heading><br />
      <TrumpGrid :trumps="trumpStore.trumps" />

      <flexible-heading :level="3">Type Your Text Below</flexible-heading><br />
      <TextBox :limit="280" placeholder="Many people say...." v-model="rawText">
        <template v-slot:left>
          <label for="enableHands">Emojis</label>
          <input type="checkbox" id="enableHands" v-model="addHands" />
        </template>
      </TextBox>
      <ShareBox />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import TrumpCanvas from '../components/TrumpCanvas.vue'
import TrumpGrid from '@/components/TrumpGrid.vue'
import FlexibleHeading from '../components/FlexibleHeading.vue'
import TextBox from '../components/TextBox.vue'
import ShareBox from '@/components/ShareBox.vue'

import { ACTIONS as TRUMP_ACTIONS, GETTERS as TRUMP_GETTERS, useTrumpStore } from '@/stores/trump'
import { ACTIONS as TEXT_ACTIONS, GETTERS as TEXT_GETTERS, useTextStore } from '@/stores/text'
import { useRoute } from 'vue-router'

const trumpStore = useTrumpStore()
const textStore = useTextStore()
const route = useRoute()

const addHands = computed({
  get() {
    return textStore.emoji
  },
  set(addHands: string) {
    textStore[TEXT_ACTIONS.SET_EMOJI](addHands)
  },
})

const rawText = computed({
  get() {
    return textStore.rawText
  },
  set(text: string) {
    textStore[TEXT_ACTIONS.SET_TEXT](text)
  },
})

// Computed properties
const trumpQuote = computed(() => textStore[TEXT_GETTERS.GET_TEXT]())
const currentTrump = computed(() => trumpStore[TRUMP_GETTERS.GET_CURRENT_TRUMP]())

// Lifecycle hook
onMounted(() => {
  const { h: addHands, t: trump, q: quote } = route.query

  textStore[TEXT_ACTIONS.SET_EMOJI](addHands?.toString() || 'false')
  textStore[TEXT_ACTIONS.SET_TEXT](decodeURIComponent(quote?.toString() || ''))
  if (trump) {
    trumpStore[TRUMP_ACTIONS.SET_TRUMP](parseInt(trump.toString(), 10) - 1 || 0)
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/style/color.scss';
@use '@/assets/style/spacing.scss';
div.grid {
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
}
div.sidebar {
  background-color: color.$light-grey-1;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: hidden;
  padding: spacing.$md;
  box-sizing: border-box;
  @media (min-width: 992px) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
}
</style>

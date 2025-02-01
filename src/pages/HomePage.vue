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

      <div class="trump-container">
        <ImageTile
          v-for="(trump, index) in trumps"
          :isSelected="index === trumpStore.trumpIndex"
          @click="setTrump(index)"
          :key="trump.image"
          :name="trump.name"
          :image="trump.image"
        >
        </ImageTile>
      </div>

      <flexible-heading :level="3">Type Your Text Below</flexible-heading><br />
      <TextBox :limit="280" placeholder="Many people say...." v-model="rawText">
        <template v-slot:left>
          <label for="enableHands">Emojis</label>
          <input type="checkbox" id="enableHands" v-model="addHands" />
        </template>
      </TextBox>

      <div class="share">
        <button class="prefix" @click="copy">Copy URL</button>
        <input ref="urlBox" type="text" disabled :value="shareUrl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import TrumpCanvas from '../components/TrumpCanvas.vue'
import ImageTile from '../components/ImageTile.vue'
import FlexibleHeading from '../components/FlexibleHeading.vue'
import TextBox from '../components/TextBox.vue'

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

const trumps = trumpStore.trumps
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

const shareUrl = computed(() => {
  const base = window.location.origin + window.location.pathname
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set('t', (trumpStore.trumpIndex + 1).toString())
  params.set('h', textStore.emoji.toString())
  params.set('q', encodeURIComponent(rawText.value))
  url.search = params.toString()
  return url.toString()
})

const setTrump = (index: number) => {
  trumpStore[TRUMP_ACTIONS.SET_TRUMP](index)
}

const copy = async () => {
  await navigator.clipboard.writeText(shareUrl.value)
}

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
div.grid {
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
}

.trump-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

div.sidebar {
  background-color: var(--light-grey-1);
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: hidden;
  padding: var(--spacing-md);
  box-sizing: border-box;
  @media (min-width: 992px) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
}
.share {
  margin-top: var(--spacing-md);
  overflow: hidden;
  display: grid;
  grid-template-columns: 80px auto;
  .prefix {
    grid-column-start: 1;
    grid-column-end: 2;
    font-family: 'Montserrat';
    background-color: var(--light-grey-4);
    color: var(--mid-grey-2);
    text-align: right;
    padding: var(--spacing-sm) var(--spacing-xs);
    border: 1px solid var(--light-grey-3);
    cursor: pointer;
    &:hover {
      background-color: var(--light-grey-4);
      color: white;
    }
  }
  input[type='text'] {
    grid-column-start: 2;
    padding: var(--spacing-sm);
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: 1px solid var(--light-grey-3);
  }
}
</style>

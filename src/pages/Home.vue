<template>
  <div class="grid">
    <cvs
      ref="canvas"
      :image="currentTrump.image"
      :speech="trumpQuote"
      :bubblePosition="currentTrump.pointerPosition"
    ></cvs>

    <div class="sidebar">
      <Heading :level="3">Choose Your Trump</Heading><br />

      <div class="trump-container">
        <ImageTile
          v-for="(trump, index) in trumps"
          :isSelected="index === trumpStore.trumpIndex"
          @click.native="setTrump(index)"
          :key="trump.image"
          :name="trump.name"
          :image="trump.image"
        >
        </ImageTile>
      </div>

      <Heading :level="3">Type Your Text Below</Heading><br />
      <TextBox :limit="280" placeholder="Many people say...." v-model="rawText">
        <template v-slot:left>
          <label for="enableHands">Emojiis</label>
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
import { ref, computed, onMounted } from 'vue'
import cvs from '../components/Canvas.vue'
import ImageTile from '../components/ImageTile.vue'
import Heading from '../components/Heading.vue'
import TextBox from '../components/TextBox.vue'

import { ACTIONS, GETTERS, useTrumpStore } from '@/stores/trump'

// Reactive state
const addHands = ref(true)
const rawText = ref('')
const trumpStore = useTrumpStore()
const trumps = trumpStore.trumps

// Computed properties
const rawTextWithEmoji = computed(() =>
  rawText.value
    .split(' ')
    .map(
      (word) =>
        word +
        (Math.random() >= 0.5
          ? ['☝', '👌', '🖐', '👋', '🤏', '👐'][Math.floor(Math.random() * 6)]
          : ''),
    )
    .join(' '),
)

const trumpQuote = computed(() => (addHands.value ? rawTextWithEmoji.value : rawText.value))

const currentTrump = computed(() => trumpStore[GETTERS.GET_CURRENT_TRUMP]())

const shareUrl = computed(() => {
  const base = window.location.origin + window.location.pathname
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set('t', (trumpStore.trumpIndex + 1).toString())
  params.set('h', addHands.value.toString())
  params.set('q', encodeURIComponent(rawText.value))
  url.search = params.toString()
  return url.toString()
})

const setTrump = (index: number) => {
  trumpStore[ACTIONS.SET_TRUMP](index)
}

const copy = async () => {
  await navigator.clipboard.writeText(shareUrl.value)
}

// Lifecycle hook
onMounted(() => {
  const { h, t, q } = Object.fromEntries(new URLSearchParams(window.location.search))
  addHands.value = h === 'true'
  trumpStore[ACTIONS.SET_TRUMP](parseInt(t) - 1 || 0)
  rawText.value = q || ''
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

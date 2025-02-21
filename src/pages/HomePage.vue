<template>
  <content-area>
    <template #default>
      <trump-canvas
        ref="canvas"
        :image="currentTrump.image"
        :speech="trumpQuote"
        :bubblePosition="currentTrump.pointerPosition"
      ></trump-canvas>
    </template>
    <template #sidebar>
      <flexible-heading :level="3">Choose Your Trump</flexible-heading>
      <TrumpGrid :trumps="trumpStore.trumps" />

      <flexible-heading :level="3">Type Your Text Below</flexible-heading>
      <TextBox :limit="280" placeholder="Many people say...." v-model="rawText">
        <template v-slot:left>
          <ToggleCheckbox label="Emojis" v-model="addHands" />
        </template>
      </TextBox>
      <ShareBox />
    </template>
  </content-area>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import TrumpCanvas from '@/components/TrumpCanvas.vue'
import TrumpGrid from '@/components/TrumpGrid.vue'
import FlexibleHeading from '@/components/FlexibleHeading.vue'
import TextBox from '@/components/TextBox.vue'
import ShareBox from '@/components/ShareBox.vue'
import ContentArea from '@/components/ContentArea.vue'

import { ACTIONS as TRUMP_ACTIONS, GETTERS as TRUMP_GETTERS, useTrumpStore } from '@/stores/trump'
import { ACTIONS as TEXT_ACTIONS, GETTERS as TEXT_GETTERS, useTextStore } from '@/stores/text'
import { useRoute } from 'vue-router'
import ToggleCheckbox from '@/components/ToggleCheckbox.vue'

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

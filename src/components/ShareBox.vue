<template>
  <div>
    <button @click="copy" :title="buttonText">
      {{ copiedMessage || buttonText }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useTextStore } from '@/stores/text'
import { useTrumpStore } from '@/stores/trump'

const textStore = useTextStore()
const trumpStore = useTrumpStore()

const copiedMessage = ref('')

const shareUrl = computed(() => {
  const url = new URL(window.location.origin + window.location.pathname)
  const params = new URLSearchParams(url.search)
  params.set('t', (trumpStore.trumpIndex + 1).toString())
  params.set('h', textStore.emoji.toString())
  if (textStore.text.length > 0) {
    params.set('q', encodeURIComponent(textStore.text))
  }
  url.search = params.toString()
  return url.toString()
})

const buttonText = computed(() => 'Share Link')

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

const copy = async () => {
  copiedMessage.value = (await copyToClipboard(shareUrl.value)) ? 'Copied!' : 'Failed to copy'
  setTimeout(() => {
    copiedMessage.value = ''
  }, 1500)
}
</script>

<style scoped>
div {
  @apply mt-4;
}
button {
  @apply break-all
    cursor-pointer
    border
    border-gray-400
    p-2
    w-full
    text-gray-800;
}
</style>

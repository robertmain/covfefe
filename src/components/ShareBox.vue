<template>
  <button @click="click" :title="buttonText">
    {{ copiedMessage || buttonText }}
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTextStore } from '@/stores/text'
import { useTrumpStore } from '@/stores/trump'

const copiedMessage = ref('')

interface Props {
  buttonText: string
  clickHandler: () => Promise<void>
  copySuccessMessage?: string
}
const { clickHandler, buttonText = '', copySuccessMessage = 'Copied' } = defineProps<Props>()

const click = async () => {
  await clickHandler()
  copiedMessage.value = copySuccessMessage
  setTimeout(() => {
    copiedMessage.value = ''
  }, 1500)
}
</script>

<style scoped>
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

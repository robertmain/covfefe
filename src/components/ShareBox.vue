<template>
  <button @click="click" :title="buttonText">
    {{ copiedMessage || buttonText }}
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { useTextStore } from '@/stores/text'
import { useTrumpStore } from '@/stores/trump'

const textStore = useTextStore()
const trumpStore = useTrumpStore()

const copiedMessage = ref('')

const slots = useSlots()
const buttonText = computed(() => (slots.default ? slots.default()[0].children?.toString()! : ''))
interface Props {
  clickHandler: () => Promise<void>
  copySuccessMessage?: string
}
const { clickHandler, copySuccessMessage = 'Copied' } = defineProps<Props>()

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

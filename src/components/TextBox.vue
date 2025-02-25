<template>
  <div>
    <textarea
      :cols="cols"
      :rows="rows"
      v-model="text"
      :maxlength="limit"
      :placeholder="placeholder"
      ref="textbox"
      @input="onInput"
    ></textarea>
    <div class="caption">
      <div>
        <slot name="left"></slot>
      </div>
      <span class="text-remaining">Remaining: {{ limit - text.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  placeholder?: string
  cols?: number
  rows?: number
  limit?: number
  modelValue?: string
}

const { placeholder = '', cols = 30, rows = 6, limit = 40, modelValue = '' } = defineProps<Props>()

// Reactive data
const text = ref('')

// Emit input event
const onInput = () => {
  emit('update:modelValue', text.value)
}
const emit = defineEmits(['update:modelValue'])

watch(
  () => modelValue,
  (newVal) => {
    if (newVal !== text.value) {
      text.value = newVal
    }
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
@use '@/assets/style/spacing.scss';
@use '@/assets/style/color.scss';
textarea {
  @apply resize-none
    text-gray-600
    text-base
    border
    border-gray-300
    w-full
    p-2
    mb-[-2px]
    font-montserrat
    font-thin
    box-border;
}
.caption {
  @apply text-gray-600
    text-base
    bg-gray-300
    p-3
    grid
    grid-cols-2
    items-center;
  .text-remaining {
    @apply text-right
      text-sm;
  }
}
</style>

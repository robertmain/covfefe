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
      <div class="left">
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
textarea {
  resize: none;
  line-height: 1.5;
  color: var(--mid-grey-2);
  border: 1px solid var(--light-grey-3);
  width: 100%;
  padding: var(--spacing-sm);
  margin-bottom: -2px;
  font-family: 'Montserrat';
  box-sizing: border-box;
}
.caption {
  background-color: var(--light-grey-3);
  padding: var(--spacing-sm);
  display: grid;
  grid-template-columns: 50% 50%;
  .left {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .text-remaining {
    grid-column-start: 2;
    text-align: right;
  }
}
</style>

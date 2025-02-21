<template>
  <label class="flex items-center space-x-2">
    <input
      type="checkbox"
      v-model="checked"
      class="w-4 h-4 border-2 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
    />
    <span class="text-sm text-gray-600">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
}

const checked = defineModel()
const props = defineProps<Props>()

</script>

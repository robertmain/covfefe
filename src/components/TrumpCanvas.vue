<template>
  <div class="canvas">
    <img :src="image" />
    <div class="quote-container">
      <blockquote :style="{ fontSize: `${textSize}px` }">
        <span v-if="props.speech.length > 0">&quot;</span>
        {{ props.speech.slice(0, 280) }}
        <span v-if="props.speech.length > 0">&quot;</span>
      </blockquote>
      <div class="arrow" :style="{ top: `${bubblePosition}px` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

// Props
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  speech: {
    type: String,
    required: false,
    default: '',
  },
  bubblePosition: {
    type: Number,
    required: false,
    default: 100,
  },
})

// Computed property for dynamic text size
const textSize = computed(() => {
  const sizes = [20, 16, 12]
  if (props.speech.length < 116) {
    return sizes[0]
  } else if (props.speech.length > 116 && props.speech.length < 246) {
    return sizes[1]
  } else {
    return sizes[2]
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
$color1: #3b5998;
$color2: color.adjust($color1, $lightness: 5%, $space: hsl);

.canvas {
  @apply w-full
    p-5
    box-border
    grid
    grid-cols-[220px_300px]
    gap-4;
  background: repeating-linear-gradient(
    -45deg,
    $color1 0px,
    $color1 30px,
    $color2 30px,
    $color2 60px
  );
}

.quote-container {
  @apply relative;
}

blockquote {
  @apply min-h-[250px]
    rounded-lg
    bg-white/30
    text-white
    overflow-hidden
    box-border
    p-3
    font-tinyhand
    leading-[2.5]
    max-h-[460]
    relative;
}

.arrow {
  @apply absolute
    border-[50px]
    border-transparent
    border-x-white/30
    border-l-0
    border-b-0
    -mt-[50px]
    -ml-[50px];
}
</style>

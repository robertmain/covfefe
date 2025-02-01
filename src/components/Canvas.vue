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
  width: 100%;
  padding: var(--spacing-md);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 220px 300px;
  column-gap: 1rem;
  background: repeating-linear-gradient(
    -45deg,
    $color1 0px,
    $color1 30px,
    $color2 30px,
    $color2 60px
  );
}

img {
  grid-column-start: 1;
  grid-column-end: 2;
}

.quote-container {
  grid-column-start: 2;
  position: relative;
}

blockquote {
  min-height: 250px;
  border-radius: 10px;
  height: auto;
  background: rgba(white, 0.3);
  color: white;
  overflow: hidden;
  box-sizing: border-box;
  padding: var(--spacing-md);
  font-family: 'TinyHand';
  line-height: 2.5;
  max-height: 460px;
  position: relative;
}

.arrow {
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-right-color: rgba(255, 255, 255, 0.3);
  border-left: 0;
  border-bottom: 0;
  margin-top: -50px;
  margin-left: -50px;
}
</style>

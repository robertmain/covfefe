<template>
  <v-stage :config="configKonva" ref="stage">
    <v-layer>
      <v-rect
        :config="{
          ...backgroundConfig,
          width: configKonva.width,
          height: configKonva.height,
        }"
      ></v-rect>
      <speech-bubble
        :x="configSpeechBubble.x"
        :y="configSpeechBubble.y"
        :width="configSpeechBubble.width"
        :height="configSpeechBubble.height"
        :padding="padding"
        :text="text"
      />
      <v-image
        :config="{
          image: image,
          x: padding,
          y: padding,
        }"
      />
      <vanity-bar
        :height="40"
        :y="configKonva.height - 40"
        :x="0"
        :width="configKonva.width"
        :padding="padding"
      />
    </v-layer>
  </v-stage>
</template>
<script setup lang="ts">
import { onMounted, ref, defineProps, toRef, computed } from 'vue'
import SpeechBubble from '@/components/Canvas/SpeechBubble.vue'
import VanityBar from '@/components/Canvas/VanityBar.vue'
import { useTextStore } from '@/stores/text'
import { useEmojis } from '@/composables/useEmojis'

interface Props {
  image: string
  speech?: string
  bubblePosition?: number
  padding?: number
  width?: number
  height?: number
  scale?: number
}

const {
  speech = '',
  bubblePosition = 100,
  padding = 20,
  width = 600,
  height = 550,
  scale = 1,
  ...props
} = defineProps<Props>()
const textStore = useTextStore()

const basicDimensions = {
  width,
  height,
}

const configKonva = {
  ...basicDimensions,
  scale: {
    x: scale,
    y: scale,
  },
}

const configSpeechBubble = {
  width: basicDimensions.width * 0.5,
  height: basicDimensions.height * 0.45,
  x: basicDimensions.width - (basicDimensions.width * 0.5 + padding),
  y: padding,
}

const backgroundConfig = ref<
  typeof basicDimensions & {
    fillPatternImage: HTMLImageElement | null
    fillPatternRepeat: string
    fillPatternScale: typeof configKonva.scale
  }
>({
  ...basicDimensions,
  fillPatternImage: null,
  fillPatternRepeat: 'repeat',
  fillPatternScale: configKonva.scale,
})

onMounted(() => {
  // Create an offscreen canvas for the pattern
  const patternCanvas = document.createElement('canvas')
  patternCanvas.width = 85 // Width of one stripe cycle
  patternCanvas.height = patternCanvas.width
  const ctx: CanvasRenderingContext2D = patternCanvas.getContext('2d')!

  ctx.fillStyle = '#4264aa' // Light stripe color
  ctx.fillRect(0, 0, patternCanvas.width, patternCanvas.height)
  ctx.fillStyle = '#3b5998' // Dark stripe color
  ctx.beginPath()
  ctx.moveTo(0, patternCanvas.height * 0.25)
  ctx.lineTo(0, 0)
  ctx.lineTo(patternCanvas.width * 0.25, 0)
  ctx.closePath()
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(0, patternCanvas.height * 0.75)
  ctx.lineTo(patternCanvas.width * 0.75, 0)
  ctx.lineTo(patternCanvas.width, 0)
  ctx.lineTo(patternCanvas.width, patternCanvas.height * 0.25)
  ctx.lineTo(patternCanvas.width * 0.25, patternCanvas.height)
  ctx.lineTo(0, patternCanvas.height)
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(patternCanvas.width * 0.75, patternCanvas.height)
  ctx.lineTo(patternCanvas.width, patternCanvas.height)
  ctx.lineTo(patternCanvas.width, patternCanvas.height * 0.75)
  ctx.closePath()
  ctx.fill()

  // Convert canvas to pattern image
  const patternImage = new Image()
  patternImage.src = patternCanvas.toDataURL()
  patternImage.onload = () => {
    backgroundConfig.value.fillPatternImage = patternImage
  }
})

const image = computed(() => {
  const imgElement = new Image()
  imgElement.src = props.image
  return imgElement
})

const text = useEmojis(
  toRef(() => speech),
  toRef(() => textStore.emoji),
)
</script>

import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useTextAnimation(fullText: string, speed = 50) {
  const index = ref(0)
  const animatedText = computed(() => fullText.slice(0, index.value))

  let interval: number | null = null

  onMounted(() => {
    interval = window.setInterval(() => {
      if (index.value < fullText.length) {
        index.value += 1
      } else if (interval) {
        clearInterval(interval)
      }
    }, speed)
  })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return animatedText
}

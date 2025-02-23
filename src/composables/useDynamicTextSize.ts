import { computed, toValue, type MaybeRefOrGetter } from 'vue'

export function useDynamicTextSize(textRef: MaybeRefOrGetter<string>) {
  const sizes = [20, 16, 12]

  return computed(() => {
    const text = toValue(textRef)
    if (text.length < 116) {
      return sizes[0]
    } else if (text.length < 246) {
      return sizes[1]
    } else {
      return sizes[2]
    }
  })
}

import { computed, toValue, type MaybeRefOrGetter } from 'vue'

export function useEmojis(text: MaybeRefOrGetter<string>, enabled: MaybeRefOrGetter<boolean>) {
  const emojis = ['☝', '👌', '🖐', '👋', '🤏', '👐']
  return computed(() => {
    const valueText = toValue(text)
    const valueEnabled = toValue(enabled)
    return valueEnabled
      ? valueText
          .split(' ')
          .map((word) => word + (Math.random() >= 0.5 ? emojis[Math.floor(Math.random() * 6)] : ''))
          .join(' ')
      : valueText
  })
}

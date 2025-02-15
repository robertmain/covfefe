<script lang="ts">
import { computed, h } from 'vue'

export default {
  props: {
    level: {
      type: [Number],
      required: true,
      validator: (value: number) =>
        Number.isInteger(parseInt(value.toString())) &&
        parseInt(value.toString()) >= 0 &&
        parseInt(value.toString()) <= 6,
    },
  },
  setup(props, { slots }) {
    const computedLevel = computed(() => parseInt(props.level.toString()))
    return () => h(`h${computedLevel.value}`, {}, `☝ ${slots.default?.()[0]?.children || ''}`)
  },
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-tinyhand
    text-gray-600
    mt-4
    mb-2
    clear-both
    block
    float-none;
}
</style>

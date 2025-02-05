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

<style lang="scss" scoped>
@use '@/assets/style/spacing.scss';
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  display: block;
  float: none;
  margin-bottom: spacing.$sm;
  margin-top: spacing.$md;

  &:first-of-type {
    margin-top: 0px;
  }
}
</style>

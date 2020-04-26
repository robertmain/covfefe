<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: [String, Number],
      required: true,
      validator: (value) => Number.isInteger(parseInt(value))
        && parseInt(value) >= 0
        && parseInt(value) <= 5,
    }
  },
  computed: {
    computedLevel: function () {
      return parseInt(this.level);
    },
  },
  render(createElement) {
    return createElement(`h${this.computedLevel}`, `☝ ${this.$slots.default[0].text}`)
  }
}
</script>

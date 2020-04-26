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

<style lang="scss" scoped>
h1, h2, h3, h4, h5, h6{
  margin-bottom: 20px;
}
</style>

<template>
  <div>
    <textarea
      :cols="cols"
      :rows="rows"
      v-model="text"
      :maxlength="limit"
      :placeholder="placeholder"
      ref="textbox"
      @input="() => $emit('input', this.text)"
    ></textarea>
    <div class="caption">
      <div class="left"><slot name="left"></slot></div>
      <span class="text-remaining">Remaining: {{limit - text.length}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    cols: {
      type: Number,
      required: false,
      default: 30,
    },
    rows: {
      type: Number,
      required: false,
      default: 6,
    },
    limit: {
      type: Number,
      required: false,
      default: 40,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    text: '',
  }),
  watch: {
    value: function(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.text = newVal;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
textarea{
  resize: none;
  line-height: 1.5;
  color: var(--mid-grey-2);
  border: 1px solid var(--light-grey-3);
  width: 100%;
  padding: var(--spacing-sm);
  margin-bottom: -2px;
  font-family: 'Montserrat';
  box-sizing: border-box;
}
.caption {
  background-color: var(--light-grey-3);
  padding: var(--spacing-sm);
  display: grid;
  grid-template-columns: 50% 50%;
  .insert{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .text-remaining{
    grid-column-start: 2;
    text-align: right;
  }
}
</style>

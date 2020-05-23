<template>
  <div :class="{selected: isSelected}">
    <img :src="image" alt="">
    <span>{{this.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'ImageTile',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  background-color: white;
  padding: var(--spacing-xs);
  border: 1px solid var(--light-grey-3);
  display: grid;
  grid-template-areas:
    "image"
    "text";
  grid-template-rows: 50px auto;
  grid-template-columns: 100%;
  justify-content: center;
  justify-items: center;
  row-gap: var(--spacing-sm);
  &.selected, &:hover{
    background-color: var(--light-grey-1);
    cursor: pointer;
  }
}
img{
  grid-area: image;
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}

span{
  grid-area: text;
  text-align: center;
  font-size: 12px;
  word-break: break-word;
  align-content: center;
}
</style>

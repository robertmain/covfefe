<template>
  <div :class="{selected: isSelected}">
    <img :src="image" alt=""><br />
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
  overflow: hidden;
  padding: var(--spacing-xs);
  border: 1px solid var(--light-grey-3);
  text-align: center;
  &.selected, &:hover{
    background-color: var(--light-grey-1);
    cursor: pointer;
  }
}
img{
  max-height: 75px;
}

span{
  font-size: 12px;
  clear: both;
  float: none;
}
</style>

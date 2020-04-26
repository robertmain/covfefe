<template>
  <div>
    <cvs></cvs>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';

export default {
  name: 'Home',
  components: {
    cvs: Canvas,
  },
}
</script>

<style lang="scss" scoped>
div{
  display: grid;
  grid-template-columns: auto 400px;
}
canvas{
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
}
</style>

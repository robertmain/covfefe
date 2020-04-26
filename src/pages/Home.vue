<template>
  <div>
    <cvs :image="image" speech=""></cvs>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';
import yelling from '@/assets/img/trumps/yelling.png';

export default {
  name: 'Home',
  components: {
    cvs: Canvas,
  },
  data() {
    return {
      image: yelling,
    };
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

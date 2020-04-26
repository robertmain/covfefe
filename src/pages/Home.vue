<template>
  <div class="grid">
    <cvs ref="canvas" :image="image" :speech="trumpQuote"></cvs>
    <div class="sidebar">
      <Heading level="3">Type Your Text Below</Heading><br />
      <textarea placeholder="Many people say..." @keyup="rerenderCanvas" v-model="trumpQuote" cols="30" rows="15"></textarea>
    </div>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';
import Heading from '../components/Heading';

import yelling from '@/assets/img/trumps/yelling.png';

export default {
  name: 'Home',
  components: {
    cvs: Canvas,
    Heading,
  },
  data() {
    return {
      image: yelling,
      trumpQuote: '',
    };
  },
  methods: {
    rerenderCanvas: function() {
      this.$refs.canvas.renderAll();
    }
  }
}
</script>

<style lang="scss" scoped>
div.grid{
  display: grid;
  grid-template-columns: auto 400px;
}
canvas{
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
}
div.sidebar{
  background-color: #EEE;
  grid-column-start: 2;
  overflow: hidden;
  padding: 20px;
  textarea{
    line-height: 1.5;
    font-family: 'Montserrat';
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>

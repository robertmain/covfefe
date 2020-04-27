<template>
  <div class="grid">
    <cvs ref="canvas" :image="image" :speech="trumpQuote"></cvs>
    <div class="sidebar">
      <Heading level="3">Choose Your Trump</Heading><br />
      <ImageTile
        v-for="(trump, index) in trumps"
        :isSelected="index === trumpIndex"
        @click.native="setTrump(index)"
        :key="trump.image"
        :name="trump.name"
        :image="trump.image">
      </ImageTile>

      <Heading level="3">Type Your Text Below</Heading><br />
      <textarea
        placeholder="Many people say..."
        v-model="rawText" cols="30" rows="10"
      ></textarea>

      <span class="option">
        <label for="enableHands">Do The Hands Thing</label>
        <input type="checkbox" id="enableHands" @change="rerenderCanvas" v-model="addHands" />
      </span>
    </div>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';
import ImageTile from '../components/ImageTile';
import Heading from '../components/Heading';

import yelling from '@/assets/img/trumps/yelling.png';
import smug from '@/assets/img/trumps/smug.png';

export default {
  name: 'Home',
  components: {
    cvs: Canvas,
    Heading,
    ImageTile,
  },
  data() {
    return {
      addHands: true,
      rawText: '',
      trumps: [
        {
          name: 'Yelling Trump',
          image: yelling,
        },
        {
          name: 'Smug Trump',
          image: smug,
        },
      ],
      trumpIndex: 0,
    };
  },
  computed: {
    rawTextWithEmoji: function() {
      return this.trumpize(this.rawText);
    },
    trumpQuote: function() {
      return (this.addHands === true) ? this.rawTextWithEmoji : this.rawText;
    },
    image: function() {
      return this.trumps[this.trumpIndex].image;
    }
  },
  methods: {
    trumpize: function(text) {
      const emojiis = ['☝', '👌', '🖐', '👋', '🤏', '👐', '👋'];
      return text.split(' ')
        .map((word) => word + (Math.random() >= 0.2 ? emojiis[Math.floor(Math.random() * emojiis.length)] : ''))
        .join(' ');
    },
    setTrump: function(trumpIndex) {
      this.trumpIndex = trumpIndex;
    },
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
    resize: none;
    box-sizing: border-box;
  }
}
.option{
  margin-top: 20px;
  display: inline-block;
  background-color: #AAA;
  padding: 5px;
  border: 1px solid #999;
}
</style>

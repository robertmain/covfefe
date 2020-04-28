<template>
  <div class="grid">
    <cvs
      ref="canvas"
      :image="image"
      :speech="trumpQuote"
      :bubblePosition="trumps[trumpIndex].pointerPosition"
    ></cvs>

    <div class="sidebar">
      <Heading level="3">Choose Your Trump</Heading><br />

      <div class="trump-container">
        <ImageTile
          v-for="(trump, index) in trumps"
          :isSelected="index === trumpIndex"
          @click.native="setTrump(index)"
          :key="trump.image"
          :name="trump.name"
          :image="trump.image">
        </ImageTile>
      </div>

      <Heading level="3">Type Your Text Below</Heading><br />
      <textarea
        placeholder="Many people say..."
        v-model="rawText" cols="30" rows="7"
        maxlength="280"
      ></textarea>
      <div class="textbox-caption">
        <label for="enableHands">Emojiis</label>
        <input type="checkbox" id="enableHands" v-model="addHands" />
        <span class="remaining">
          Remaining: {{280 - rawText.length}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';
import ImageTile from '../components/ImageTile';
import Heading from '../components/Heading';

import yelling from '@/assets/img/trumps/yelling.png';
import smug from '@/assets/img/trumps/smug.png';
import escapingHair from '@/assets/img/trumps/escaping_hair.png';
import bald from '@/assets/img/trumps/bald.png';

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
          pointerPosition: 200,
        },
        {
          name: 'Smug Trump',
          image: smug,
          pointerPosition: 170,
        },
        {
          name: 'Bald Trump',
          image: bald,
          pointerPosition: 160,
        },
        {
          name: 'Comb-over Trump',
          image: escapingHair,
          pointerPosition: 230,
        }
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
        .map((word) => word + (Math.random() >= 0.5 ? emojiis[Math.floor(Math.random() * emojiis.length)] : ''))
        .join(' ');
    },
    setTrump: function(trumpIndex) {
      this.trumpIndex = trumpIndex;
    },
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    this.rawText = params.get('q') || '';
    this.trumpIndex = parseInt(params.get('t')) -1 || 0;
    this.addHands = ((params.get('h') === 'true') ? true : false) || true
  }
}
</script>

<style lang="scss" scoped>
div.grid{
  display: grid;
  grid-template-columns: auto 400px;
}

.trump-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

div.sidebar{
  background-color: #EEE;
  grid-column-start: 2;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  textarea{
    line-height: 1.5;
    font-family: 'Montserrat';
    width: 100%;
    padding: 10px;
    resize: none;
    box-sizing: border-box;
    margin-bottom: -2px;
  }
}
.option{
  display: inline-block;
  background-color: #AAA;
  padding: 5px;
  border: 1px solid #999;
}
.textbox-caption{
  overflow: hidden;
  padding: 10px;
  background-color: #AAA;
  .remaining{
    text-align: right;
    float: right;
  }
}
</style>

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
      <TextBox
        :limit="280"
        placeholder="Many people say...."
        v-model="rawText"
      >
        <template v-slot:left>
          <label for="enableHands">Emojiis</label>
          <input type="checkbox" id="enableHands" v-model="addHands" />
        </template>
      </TextBox>

      <div class="share">
        <button class="prefix" @click="copy">Copy URL</button><input ref="urlBox" type="text" disabled :value="shareUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from '../components/Canvas';
import ImageTile from '../components/ImageTile';
import Heading from '../components/Heading';
import TextBox from '../components/TextBox';

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
    TextBox,
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
    },
    shareUrl: function() {
      const base = window.location.origin + window.location.pathname;
      return base + '?' + Object.entries({
        t: (this.trumpIndex + 1),
        h: this.addHands,
        q: encodeURIComponent(this.rawText),
      }).map(([key, value]) => `${key}=${value}`).join('&');
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
    copy: function() {
      this.$refs.urlBox.removeAttribute('disabled');
      this.$refs.urlBox.focus();
      this.$refs.urlBox.select();
      document.execCommand('copy');
      this.$refs.urlBox.setAttribute('disabled', true);
    },
  },
  mounted() {
    const {
      h: addHands,
      t: trump,
      q: quote,
    } = this.$route.query;
    this.addHands = {
      'true': true,
      'false': false,
    }[addHands] || false;
    this.trumpIndex = parseInt((trump -1) || 0);
    this.rawText = quote || '';
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
  background-color: var(--light-grey-1);
  grid-column-start: 2;
  overflow: hidden;
  padding: var(--spacing-md);
  box-sizing: border-box;
}
.share{
  margin-top: var(--spacing-md);
  overflow: hidden;
  display: grid;
  grid-template-columns: 80px auto;
  .prefix{
    grid-column-start: 1;
    grid-column-end: 2;
    font-family: 'Montserrat';
    background-color: var(--light-grey-4);
    color: var(--mid-grey-2);
    text-align: right;
    padding: var(--spacing-sm) var(--spacing-xs);
    border: 1px solid var(--light-grey-3);
    cursor: pointer;
    &:hover{
      background-color: var(--light-grey-4);
      color: white;
    }
  }
  input[type="text"] {
    grid-column-start: 2;
    padding: var(--spacing-sm);
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: 1px solid var(--light-grey-3);
  }
}
</style>

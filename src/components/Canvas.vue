<template>
  <div class="canvas">
    <img :src="image" />
    <div class="quote-container">
      <blockquote :style="{fontSize: `${textSize}px`}">
        <span v-if="speech.length > 0">&quot;</span>
          {{speech.slice(0, 280)}}
        <span v-if="speech.length > 0">&quot;</span>
      </blockquote>
      <div class="arrow" :style="{ top: `${bubblePosition}px` }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Canvas',
  props: {
    image: {
      type: String,
      required: true,
    },
    speech: {
      type: String,
      required: false,
      default: '',
    },
    bubblePosition: {
      type: Number,
      required: false,
      default: 100,
    }
  },
  computed: {
    textSize: function() {
      const sizes = [
        20,
        16,
        12,
      ];
      let size;
      if(this.speech.length < 116) {
        [size] = sizes
      } else if (this.speech.length > 116 && this.speech.length < 246) {
        size = sizes[1];
      } else {
        size = sizes[2];
      }
      return size;
    }
  },
}
</script>

<style lang="scss" scoped>
$color1: #3b5998;
$color2: lighten($color1, 5%);

.canvas{
  padding: var(--spacing-md);
  display: grid;
  grid-template-columns: 220px 300px;
  column-gap: 1rem;
  background: repeating-linear-gradient(
    -45deg,
    $color1 0px,
    $color1 30px,
    $color2 30px,
    $color2 60px,
  );
}
img{
  grid-column-start: 1;
  grid-column-end: 2;
}
.quote-container {
  grid-column-start: 2;
  position: relative;
}
blockquote{
  min-height: 250px;
  border-radius: 10px;
  height: auto;
  background: rgba(white, 0.3);
  color: white;
  overflow: hidden;
  padding: var(--spacing-md);
  font-family: 'TinyHand';
  line-height: 2.5;
  max-height: 460px;
  position: relative;
}
.arrow{
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-right-color: rgba(255, 255, 255, 0.3);
  border-left: 0;
  border-bottom: 0;
  margin-top: -50px;
  margin-left: -50px;
}
</style>

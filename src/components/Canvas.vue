<template>
  <canvas ref="canvas" width="584px" height="500px"></canvas>
</template>
<script>
import canvasTxt from 'canvas-txt';
import tinyHand from '@/assets/fonts/tinyhand/tinyhand-webfont.woff';

const tinyHandFont = new FontFace('TinyHand', `url('${tinyHand}')`);

export default {
  name: 'Canvas',
  props: {
    image: {
      type: String,
      required: true,
    },
    speech: {
      type: String,
      required: true,
    }
  },
  computed: {
    textSize: function() {
      const sizes = [
        20,
        16,
        14,
      ];
      let size = sizes[0];
      if(this.speech.length > 228 && this.speech.length < 338) {
        size = sizes[1]
      } else if (this.speech.length > 338) {
        size = sizes[2];
      } else if (this.speech.length < 228 ) {
        size = sizes[0];
      }
      return size;
    }
  },
  methods: {
    renderImage: function (canvas) {
      const ctx = canvas.getContext('2d');
      const img  = new Image();
      img.src = this.image;
      img.addEventListener('load', () => {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0);
      });
    },
    renderVanity: function(canvas) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = '#555';
      ctx.fillRect(0, canvas.height - (20 * 2), canvas.width, 40);

      ctx.font = '14px Montserrat';
      ctx.fillStyle = 'white';
      ctx.fillText(`Make your own @ ${window.location.href}`, 20, canvas.height - 15);
    },
    renderSpeech: function(canvas, text) {
      const context = canvas.getContext('2d');

      context.fillStyle = '#555';

      canvasTxt.font = 'TinyHand';
      canvasTxt.fontSize = this.textSize;
      canvasTxt.align = 'left';
      canvasTxt.lineHeight = 30;
      tinyHandFont.load().then(function() {
        canvasTxt.drawText(context, text, 270, 20, 300, 400);
      })
    },
  },
  mounted() {
    const {canvas} = this.$refs;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0,  canvas.width, canvas.height);

    this.renderImage(canvas);
    this.renderVanity(canvas);
    this.renderSpeech(canvas, this.speech);
  }
}
</script>

<style lang="scss">
canvas{
  border: 1px solid #555;
}
</style>

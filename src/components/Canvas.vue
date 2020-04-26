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
      required: false,
      default: '',
    }
  },
  computed: {
    textSize: function() {
      const sizes = [
        20,
        16,
        14,
      ];
      let size;
      if(this.speech.length < 228) {
        [size] = sizes
      } else if (this.speech.length > 228 && this.speech.length < 270) {
        size = sizes[1];
      } else {
        size = sizes[2];
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
      ctx.fillText(`Make your own @ ${window.location.origin + window.location.pathname}`, 20, canvas.height - 15);
    },
    renderSpeech: async function(canvas, text) {
      const context = canvas.getContext('2d');
      context.beginPath();
      context.globalAlpha = 0.2;
      context.fillRect(canvas.width-320, 20, 300, canvas.height - 80);
      context.globalAlpha = 1.0;

      canvasTxt.font = 'TinyHand';
      canvasTxt.fontSize = this.textSize;
      canvasTxt.align = 'left';
      canvasTxt.vAlign = 'top';
      canvasTxt.lineHeight = 30;
      await tinyHandFont.load();
      canvasTxt.drawText(context, `${(text.length > 0) ? '"' +text.slice(0, 400) + '"' : ''}`, 290, 40, 250, 400);
    },
    renderAll: function() {
      const {canvas} = this.$refs;
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);
      const color1 = '#3b5998';

      ctx.fillStyle = color1;
      ctx.fillRect(0, 0,  width, height);

      this.renderImage(canvas);
      this.renderVanity(canvas);
      this.renderSpeech(canvas, this.speech);
    }
  },
  mounted() {
    this.renderAll();
  }
}
</script>

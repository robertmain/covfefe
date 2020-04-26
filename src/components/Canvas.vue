<template>
  <canvas ref="canvas" width="584px" height="500px"></canvas>
</template>
<script>
import trump from '@/assets/img/trumps/smug.png';

export default {
  name: 'Canvas',
  props: {
  },
  methods: {
    renderImage: function (canvas) {
      const ctx = canvas.getContext('2d');
      const img  = new Image();
      img.src = trump;
      img.addEventListener('load', () => {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0);
      });
    },
    renderText: function(canvas) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = '#555';
      ctx.fillRect(0, canvas.height - (20 * 2), canvas.width, 40);

      ctx.font = '14px Montserrat';
      ctx.fillStyle = 'white';
      ctx.fillText(`Make your own @ ${window.location.href}`, 20, canvas.height - 15);
    }
  },
  mounted() {
    const {canvas} = this.$refs;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0,  canvas.width, canvas.height);

    this.renderImage(canvas);
    this.renderText(canvas);
  }
}
</script>

<style lang="scss">
canvas{
  border: 1px solid #555;
}
</style>

<template>
  <div>
    <img src="@/assets/img/trumps/smug.png" alt="">
    <img src="@/assets/img/trumps/yelling.png" alt="">
    <h1>{{ this.text }}</h1>
    <h2>&quot;still yore prezidnt&quot;</h2>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    text: {
      type: String,
      default: document.title,
      required: false,
    },
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 40px;
  font-family: 'TinyHand';
}
h2{
  margin-top: -40px;
  color: #555;
}
img{
  width: 75px;
  margin: 0px;
  float: left;
  margin-right: -40px;
  &:last-of-type{
    margin-right: initial;
  }
  @for $i from 1 through 3 {
    &:nth-child(#{$i}n) {
      transform: rotate(#{($i*30) - 60}deg);
    }
  }
}
</style>

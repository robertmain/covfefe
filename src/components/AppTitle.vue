<template>
  <div>
    <img src="@/assets/img/trumps/smug.png" alt="">
    <img src="@/assets/img/trumps/yelling.png" alt="">
    <h1>{{ this.text }}</h1>
    <h2>&quot;no longer yore prezidnt&quot;</h2>
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
  font-size: 45px;
  color: var(--mid-grey-3)
}

h2{
  margin-top: var(--spacing-md);
  color: var(--mid-grey-2);
}
img{
  width: 75px;
  margin: 0px;
  float: left;
  margin-right: calc(-1 * var(--spacing-lg));
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

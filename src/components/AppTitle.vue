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
@import '../assets/styles/mixins/respond-to';
div{
  display: grid;
  grid-template-areas: "faces title"
  " subtitle";
}

h1{
  font-size: 30px;
  color: var(--mid-grey-3);
  @include respond-to('xs'){
    background-color: red;
  };
}

h2{
  font-size: 12px;
  margin-top: var(--spacing-md);
  color: var(--mid-grey-2);
}
img{
  width: 60px;
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

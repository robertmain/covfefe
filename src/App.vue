<template>
  <AppTitle />
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <p>Art by <a href="http://theoatmeal.com">Matthew Inman</a></p>
    <p>
      TinyHand heading font by
      <a
        href="https://www.buzzfeednews.com/article/benking/tiny-hand-will-be-your-new-comic-sans#.ej9Mp8OlY"
        >Mark Davis</a
      >
    </p>
  </footer>
</template>

<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue'
</script>
<style lang="scss">
@use './assets/style/text.scss';
@use './assets/style/color.scss';
@use './assets/style/spacing.scss';
#app {
  padding: 0px spacing.$sm;
  color: color.$mid-grey-2;
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 768px) {
    padding: 0px spacing.$md;
    margin: spacing.$sm auto;
    width: 768px;
  }

  @media (min-width: 992px) {
    width: 992px;
  }
}
main {
  background-color: white;
  padding: spacing.$md;
}

footer {
  padding: spacing.$md;
  background-color: color.$light-grey-1;
  p {
    border-right: 1px solid color.$mid-grey-1;
    display: inline-block;
    padding-right: spacing.$sm;
    margin-right: spacing.$sm;
    &:last-of-type {
      border: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>

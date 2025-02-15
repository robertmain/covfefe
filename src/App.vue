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

<style scoped>
main {
  @apply bg-white;
}

footer {
  @apply p-4;
  @apply bg-gray-100;
  p {
    @apply text-sm;
    @apply text-gray-600;
    @apply border-r;
    @apply border-gray-500;
    @apply pr-3;
    @apply mr-3;
    @apply inline-block;
    a {
      @apply text-orange-600;
    }
    &:last-of-type {
      @apply border-0;
      @apply mr-0;
      @apply pr-0;
    }
  }
}
</style>

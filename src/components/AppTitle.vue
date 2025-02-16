<template>
  <header>
    <div class="trump-masks">
      <img src="@/assets/img/trumps/smug.png" alt="" role="presentation" />
      <img src="@/assets/img/trumps/yelling.png" alt="" role="presentation" />
    </div>
    <div class="headings">
      <h1>{{ text }}</h1>
      <h2>&quot;{{ tagLine }}&quot;</h2>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}
const { text = document.title } = defineProps<Props>()

const tagLines = [
  'am youre president',
  'I have the contepts of a plan',
  'there eeting dogs. i saw it on tv!',
]
const randomIndex = Math.floor(Math.random() * tagLines.length)
const tagLine = tagLines[randomIndex]
</script>

<style lang="scss" scoped>
header {
  @apply grid
    grid-cols-[max-content_auto]
    items-center
    gap-5
    mb-4;
}
h1,
h2 {
  @apply font-tinyhand
    text-gray-700;
}
h1 {
  @apply text-3xl
    md:text-4xl
    lg:text-5xl;
}

h2 {
  @apply text-sm
    md:text-base
    lg:text-lg
    mt-5;
}
img {
  @apply w-[60px]
    float-left
    -mr-8;
  &:last-of-type {
    @apply -mr-0;
  }
  @for $i from 1 through 3 {
    &:nth-child(#{$i}n) {
      transform: rotate(#{($i * 30) - 60}deg);
    }
  }
  @apply sm:w-[65px];
  @apply md:w-[75px];
}
</style>

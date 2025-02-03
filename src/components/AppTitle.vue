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
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: var(--spacing-md);
  margin: var(--spacing-sm) 0;

  @media (min-width: 768px) {
    margin: var(--spacing-md) 0;
  }
}

h1 {
  font-size: 35px;
  color: var(--mid-grey-3);
}

h2 {
  font-size: 15px;
  margin-top: var(--spacing-md);
  color: var(--mid-grey-2);
}
img {
  width: 60px;
  margin: 0px;
  float: left;
  margin-right: calc(-1 * var(--spacing-lg));
  &:last-of-type {
    margin-right: initial;
  }
  @for $i from 1 through 3 {
    &:nth-child(#{$i}n) {
      transform: rotate(#{($i * 30) - 60}deg);
    }
  }
  @media (min-width: 768px) {
    width: 65px;
  }
  @media (min-width: 992px) {
    width: 75px;
  }
}
</style>

<template>
  <AppTitle />
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <p>
      Art by <a href="http://theoatmeal.com">Matthew Inman</a>. TinyHand heading font by
      <a
        href="https://www.buzzfeednews.com/article/benking/tiny-hand-will-be-your-new-comic-sans#.ej9Mp8OlY"
        >Mark Davis</a
      >
    </p>
  </footer>
</template>

<script setup lang="ts">
import 'reset.css'
import AppTitle from '@/components/AppTitle.vue'
</script>
<style lang="scss">
@import './assets/fonts/tinyhand/style.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

:root {
  // Spacing
  --spacing-xs: 5px;
  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 40px;

  // Colors
  --mid-orange: orange;
  --mid-yellow: yellow;

  //Greys
  --light-grey-1: #eee;
  --light-grey-2: #ddd;
  --light-grey-3: #ccc;
  --light-grey-4: #a9a9a9;

  --mid-grey-1: #777;
  --mid-grey-2: #575757;
  --mid-grey-3: #444;

  --dark-grey-1: #333;
  --dark-grey-2: #222;
  --dark-grey-1: #111;
}

body {
  background: repeating-conic-gradient(
    from 0deg,
    var(--mid-orange) 0deg 25deg,
    var(--mid-yellow) 25deg 45deg
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Montserrat';
  font-size: 14px;
  display: grid;
}
#app {
  padding: 0px var(--spacing-md);
  color: var(--mid-grey-2);
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 768px) {
    margin: var(--spacing-sm) auto;
    width: 768px;
  }
  @media (min-width: 992px) {
    width: 992px;
  }
}
h1,
h2,
h3,
h4 {
  font-family: 'TinyHand';
}
main {
  background-color: white;
  padding: var(--spacing-md);
}
footer {
  padding: var(--spacing-md);
  background-color: var(--light-grey-1);
  p {
    font-size: 13px;
  }
  a {
    color: var(--mid-orange);
  }
}
p {
  color: var(--mid-grey-1);
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>

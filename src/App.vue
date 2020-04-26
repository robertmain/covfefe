<template>
  <div id="app">
    <AppTitle />
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle';
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    AppTitle,
    Home,
  }
}
</script>
<style lang="scss">
@import './assets/fonts/tinyhand/style.css';

html{
  height: 100%;
}
body {
  background: conic-gradient(
    orange 0 5%,
    yellow 0 10%,
    orange 0 15%,
    yellow 0 20%,
    orange 0 25%,
    yellow 0 30%,
    orange 0 35%,
    yellow 0 40%,
    orange 0 45%,
    yellow 0 50%,
    orange 0 55%,
    yellow 0 60%,
    orange 0 65%,
    orange 0 70%,
    yellow 0 75%,
    orange 0 80%,
    yellow 0 85%,
    orange 0 90%,
    yellow 0 95%,
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#app {
  width: 1024px;
  margin: 40px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
h1,h2,h3,h4 {
  font-family: 'TinyHand';
}
main{
  background-color: white;
  padding: 20px;
}
</style>

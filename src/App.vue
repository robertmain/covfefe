<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>
<style lang="scss">
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
  background-color: white;
  padding: 20px;
  width: 1024px;
  margin: 40px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

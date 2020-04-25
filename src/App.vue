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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

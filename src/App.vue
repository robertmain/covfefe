<template>
  <div id="app">
    <header>
      <AppTitle />
    </header>
    <main>
      <Home />
    </main>

    <footer>
      <p>
        Art by <a href="http://theoatmeal.com">Matthew Inman</a>. TinyHand heading font by <a href="https://www.buzzfeednews.com/article/benking/tiny-hand-will-be-your-new-comic-sans#.ej9Mp8OlY">Mark Davis</a>
      </p>
    </footer>
  </div>
</template>

<script>
import 'reset.css';
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
  font-family: 'Montserrat';
  font-size: 14px;
}
#app {
  width: 1024px;
  margin: 40px auto;
  color: #2c3e50;
}
h1,h2,h3,h4 {
  font-family: 'TinyHand';
}
header{
  margin-bottom: 40px;
}
main{
  background-color: white;
  padding: 20px;
}
footer{
  padding: 20px;
  background-color: #EEE;
  border-top: 1px solid #DDD;
  p {
    font-size: 13px;
    color: #777;
    a {
      color: orange;
    }
  }
}
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
}
</style>

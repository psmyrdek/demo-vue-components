<template>
  <div id="app">
    <div class="max-w-screen-lg mx-auto text-align-left">
      <h1 class="text-white text-left text-2xl font-bold my-6">
        Zobacz nasze filmy
      </h1>
      <MoviesWithLoader />
    </div>
  </div>
</template>

<script>

import MoviesWithLoader from './components/MoviesWithLoader'

export default {
  name: "App",
  components: {
    MoviesWithLoader
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
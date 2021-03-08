<template>
  <div>
    <div v-for="movie in movies" :key="movie" class="mb-4">
      <img src="../assets/movie.png" alt="Movie" />
    </div>
  </div>
</template>

<script>
import { fetchMovies } from "./fetchMovies";

export default {
  name: "Movies",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    fetchMovies().then((movies) => {
      this.movies = movies;
    });
  },
};
</script>

<style>
</style>
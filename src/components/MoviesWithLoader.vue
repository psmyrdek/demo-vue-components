<template>
  <div>
    <Loader v-if="isLoading" class="w-16 mx-auto" />
    <div v-else class="space-y-4">
      <div v-for="movie in movies" :key="movie">
        <img src="../assets/movie.png" alt="Movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMoviesWithDelay } from "./fetchMovies";
import Loader from "./common/Loader";

export default {
  name: "MoviesWithLoader",
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: true,
      movies: [],
    };
  },
  mounted() {
    fetchMoviesWithDelay().then((movies) => {
      this.movies = movies;
    })
    .finally(() => {
        this.isLoading = false;
    })
  },
};
</script>

<style>
</style>
<template>
  <div>
    <div v-if="isLoading">
      <Timeout />
      <Loader class="w-16 mt-10 mx-auto" />
    </div>
    <div v-else class="space-y-4">
      <div v-for="movie in movies" :key="movie">
        <img src="../assets/movie.png" alt="Movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMoviesWithLongDelay } from "./fetchMovies";
import Loader from "./common/Loader";
import Timeout from "./common/Timeout";

export default {
  name: "MoviesWithTimeout",
  components: {
    Loader,
    Timeout
  },
  data() {
    return {
      isLoading: true,
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies: function () {
      fetchMoviesWithLongDelay()
        .then((movies) => {
          this.movies = movies;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>
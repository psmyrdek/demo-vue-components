<template>
  <div>
    <ErrorHandler v-if="isError" @tryAgain="fetchMovies()" message="We couldn't fetch movies - please try again in a while."/>
    <div v-else>
      <Loader v-if="isLoading" class="w-16 mx-auto" />
      <div v-else class="space-y-4">
        <div v-for="movie in movies" :key="movie">
          <img src="../assets/movie.png" alt="Movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMoviesWithError } from "./fetchMovies";
import Loader from "./common/Loader";
import ErrorHandler from "./common/ErrorHandler";

export default {
  name: "MoviesWithError",
  components: {
    Loader,
    ErrorHandler
  },
  data() {
    return {
      isError: false,
      isLoading: true,
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies: function () {
      this.isError = false;
      this.isLoading = true;
      fetchMoviesWithError()
        .then((movies) => {
          this.movies = movies;
        })
        .catch(() => {
          this.isError = true;
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
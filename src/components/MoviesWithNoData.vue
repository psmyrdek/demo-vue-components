<template>
  <div>
    <Loader v-if="isLoading" class="w-16 mx-auto" />
    <div v-else class="space-y-4">
      <div v-for="movie in movies" :key="movie">
        <img src="../assets/movie.png" alt="Movie" />
      </div>
      <NoData v-if="movies.length === 0" />
    </div>
  </div>
</template>

<script>
import { fetchNoMovies } from "./fetchMovies";
import Loader from "./common/Loader";
import NoData from "./common/NoData";

export default {
  name: "MoviesWithNoData",
  components: {
    Loader,
    NoData
  },
  data() {
    return {
      isLoading: true,
      movies: [],
    };
  },
  mounted() {
    fetchNoMovies().then((movies) => {
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
<template>
  <div>
    <Loader v-if="isLoading" class="w-16 mx-auto" />
    <div v-else class="space-y-4">
      <div
        class="movie"
        v-for="movie in movies"
        :key="movie"
        @click="setAsFav()"
      >
        <img src="../assets/movie.png" alt="Movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMoviesWithDelay } from "./fetchMovies";
import { setAsFavorite } from "./setAsFavorite";
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
    fetchMoviesWithDelay()
      .then((movies) => {
        this.movies = movies;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    setAsFav() {
      setAsFavorite()
        .then(() => {
          this.$vToastify.success("Marked as favorite!");
        })
        .catch(() => {
          this.$vToastify.error("Please try again")
        })
    },
  },
};
</script>

<style>
.movie {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.movie:hover {
  transform: scale(1.01);
}
</style>
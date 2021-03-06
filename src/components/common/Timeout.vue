<template>
  <div class="flex flex-col justify-center" v-if="isVisible">
    <div>
        <img class="mx-auto" src="../../assets/timer.png" alt="No results">
    </div>
    <p class="text-2xl font-bold text-white mt-10">Pobieranie danych trwa dłużej niż zwykłe</p>
    <p class="text-white">Sprawdź jakość swojego połączenia z internetem</p>
  </div>
</template>

<script>
export default {
    name: 'Timeout',
    data() {
        return {
            timer: null,
            isVisible: false
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.isVisible = true;
        }, 5000);
    },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>

<style>

</style>
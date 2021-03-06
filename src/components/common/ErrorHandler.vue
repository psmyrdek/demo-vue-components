<template>
  <div class="flex flex-col">
      <p class="text-blue-300">{{ message }}</p>
      <div class="mt-8">
          <button class="bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-400" @click="onClick()">Try again</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ErrorHandler',
    props: {
        message: {
            type: String
        }
    },
    methods: {
        onClick: function() {
            this.$emit('tryAgain')
        }
    }
}
</script>

<style>

</style>
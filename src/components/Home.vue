<template>
    <div class="hero">
      <h1>A community that accepts everyone</h1>
      <button v-on:click="joinUsToday">Join Us Today!</button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  methods: {
    joinUsToday() {
      this.$emit('join-button-click')
    },
  }
}
</script>
<template>
  <div class="hero">
    <h1 class="display-1 text-uppercase">Special Connections</h1>
    <p class="lead">A safe community for everyone</p>
    <button class="btn btn-outline-danger" @click="joinUsToday">
      Join Us Today!
    </button>
    <font-awesome-icon icon="wifi" />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods: {
    joinUsToday() {
      this.$router.push("/create-profile");
    },
  },
};
</script>

<style>
.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

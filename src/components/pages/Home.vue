<template>
  <div class="background">
    <div class="hero">
      <h1 class="display-1 text-uppercase">Special Connections</h1>
      <p class="lead">
        A Dating Service and Social Network for Disabled People
      </p>
      <button class="btn btn-danger" @click="joinUsToday">
        Join Us Today!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods: {
    joinUsToday() {
      this.$router.push("/join-us");
    },
  },
};
</script>

<style>
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./../../assets/hero.jpeg");
  background-size: cover;
  background-position: center;
  height: 100%;
}

.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e9e9e9;
}

.users-icon {
  font-size: 200px;
}
</style>

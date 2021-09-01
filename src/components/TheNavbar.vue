<template>
  <div class="navbar bg-danger">
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          to="/"
          >Home</router-link
        >

        <router-link
          class="nav-link link-light"
          to="/join-us"
          active-class="active"
        >
          Join Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          to="/about-us"
        >
          About Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          to="/reviews"
        >
          Our Reviews</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          to="/contact"
        >
          Contact Us</router-link
        >
      </ul>
      <!-- <button
        class="btn btn-sm btn-outline-light"
        v-if="this.page == 'Profiles'"
      >
        Log Out
      </button>
      <button
        class="btn btn-sm btn-outline-light"
        v-else-if="this.page !== 'CreateProfile'"
      >
        Log In
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {},
};
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(109, 109, 109) !important;
}
</style>

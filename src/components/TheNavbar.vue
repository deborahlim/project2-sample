<template>
  <div class="navbar bg-danger">
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          :to="{ name: 'home' }"
          v-if="!loggedIn"
          >Home</router-link
        >

        <router-link
          class="nav-link link-light"
          :to="{ name: 'joinUs' }"
          active-class="active"
          v-if="!loggedIn"
        >
          Join Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'aboutUs' }"
          v-if="!loggedIn"
        >
          About Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'reviews' }"
          v-if="!loggedIn"
        >
          Our Reviews</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'reviews' }"
          v-if="loggedIn"
        >
          Review Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'contact' }"
        >
          Contact Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'user' }"
          v-if="loggedIn"
        >
          Your Matches</router-link
        >
      </ul>
      <router-link
        class="btn btn-sm btn-outline-light ms-auto ms-auto"
        :to="{ name: 'login' }"
        v-if="!loggedIn"
      >
        Log In</router-link
      >
      <button
        class="btn btn-sm btn-outline-light ms-auto"
        v-if="loggedIn"
        @click="logOut"
      >
        Log Out
      </button>
      <!-- "btn btn-sm btn-outline-light" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(109, 109, 109) !important;
}
</style>

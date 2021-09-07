<template>
  <div class="navbar bg-danger">
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          :to="{ name: 'home' }"
          >Home</router-link
        >

        <router-link
          class="nav-link link-light"
          :to="{ name: 'joinUs' }"
          active-class="active"
        >
          Join Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'aboutUs' }"
        >
          About Us</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'reviews' }"
        >
          Our Reviews</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="{ name: 'contact' }"
        >
          Contact Us</router-link
        >
      </ul>
      <router-link
        class="btn btn-sm btn-outline-light ms-auto ms-auto"
        :to="{ name: 'login' }"
      >
        Log In</router-link
      >
      <!-- "btn btn-sm btn-outline-light" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(109, 109, 109) !important;
}
</style>

<template>
  <div class="navbar bg-danger">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          :to="'/user/' + getId"
          >Matches</router-link
        >

        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          :to="{ name: 'browse' }"
          >Browse All Users</router-link
        >
        <router-link
          class="nav-link link-light"
          active-class="active"
          exact
          :to="'/user/profile/' + getId"
          v-if="hasProfile"
        >
          My Profile
        </router-link>

        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="'/user/review/' + getId"
        >
          Review Us</router-link
        >
        <router-link
          class="nav-link link-light"
          active-class="active"
          :to="'/user/account/' + getId"
        >
          My Account
        </router-link>
      </ul>
      <button class="btn btn-sm btn-outline-light ms-auto" @click="logOut">
        Log Out
      </button>
      <!-- "btn btn-sm btn-outline-light" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      isLoading: false,
      hasProfile: false,
    };
  },
  computed: {
    getId() {
      return this.$store.state.auth.userId;
    },
    checkHasProfile() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
    },
  },
  watch: {
    checkHasProfile() {
      if (this.checkHasProfile) {
        this.hasProfile = true;
      } else {
        this.hasProfile = false;
      }
    },
  },
  methods: {
    logOut() {
      this.isLoading = true;
      this.$store.dispatch("logOut");
      this.$router.replace("/");
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(109, 109, 109) !important;
}
</style>

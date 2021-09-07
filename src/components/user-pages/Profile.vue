<template>
  <div class="">
    <div class="card m-5 profile">
      <div class="card-header">
        <h1 class="display-4 my-3">{{ getUsername }}'s Profile</h1>
      </div>
      <div class="card-body">
        <h5
          v-for="(value, key) in getProfile"
          :key="key"
          class="card-title row text-start ms-5"
        >
          <span class="col-5">{{ key }}:</span>
          <span class=" col-7">{{ value }}</span>
        </h5>

        <button class="btn btn-primary" @click.prevent="goToProfileForm">
          Edit
        </button>
        <button class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    getUsername() {
      return this.$store.state.auth.username;
    },
    getProfile() {
      return this.$store.state.auth.profile;
    },
    // getPreferences() {},
  },
  methods: {
    goToProfileForm() {
      this.$router.replace(
        "/user/profile-form/" + this.$store.state.auth.userId
      );
    },
  },
};
</script>

<style>
.profile {
  /* width: 50vw; */
}
</style>

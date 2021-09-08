<template>
  <div class="">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Something Went Wrong!"
      :content="error"
      @close="handleError"
    >
    </base-modal>
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
        <button class="btn btn-primary" @click.prevent="removeProfile">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    getUsername() {
      return this.$store.state.auth.username;
    },
    getProfile() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
    },
    // getPreferences() {},
  },
  methods: {
    goToProfileForm() {
      this.$router.replace(
        "/user/profile-form/" + this.$store.state.auth.userId
      );
    },
    async removeProfile() {
      this.loading = true;
      try {
        await this.$store.dispatch("deleteProfile");
      } catch (err) {
        this.error = err.message;
        console.log(err);
      }
      this.loading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style></style>

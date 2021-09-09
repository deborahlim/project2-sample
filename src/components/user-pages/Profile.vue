<template>
  <div class="">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-confirm
      :show="deleteClick"
      content="Confirm Delete?"
      @close="handleError"
    >
    </base-confirm>
    <div class="card m-5 profile">
      <div class="card-header">
        <h1 class="display-4 my-3">{{ getUsername }}'s Profile</h1>
      </div>
      <div class="card-body mx-5">
        <h5
          v-for="(value, key) in this.$store.state.user.formattedProfile"
          :key="key"
          class="card-title row text-start ms-5 "
        >
          <span class="text-start col-6">{{ key }}:</span>
          <span class="text-start col-6">{{ value }}</span>
        </h5>

        <button class="btn btn-primary m-3" @click.prevent="goToProfileForm">
          Edit
        </button>
        <button class="btn btn-danger" @click.prevent="removeProfile">
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
      deleteClick: false,
    };
  },
  created() {
    this.displayProfile();
  },
  computed: {
    getUsername() {
      return this.$store.state.auth.username;
    },
    getProfile() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
    },
    getBasicProfile() {
      return this.displayProfile.dob;
    },
  },

  methods: {
    goToProfileForm() {
      this.$router.push("/user/profile-form/" + this.$store.state.auth.userId);
    },
    async removeProfile() {
      this.loading = true;
      this.deleteClick = true;
      this.error = "Confirm Delete?";
      try {
        await this.$store.dispatch("deleteProfile");
      } catch (err) {
        this.error = err.message;
        console.log(err);
      }
      this.loading = false;
    },
    displayProfile() {
      this.$store.dispatch("formatProfile");
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style></style>

<template>
  <div class="">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-confirm
      :show="deleteClick"
      content="Confirm Delete?"
      @confirm="removeProfile"
      @cancel="deleteClick = false"
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
          <span class="text-start col-6">{{ keysToLabels[key] }}:</span>
          <span class="text-start col-6">{{ value }}</span>
        </h5>

        <button class="btn btn-primary m-3" @click.prevent="goToProfileForm">
          Edit
        </button>
        <button class="btn btn-danger" @click.prevent="deleteClick = true">
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
      keysToLabels: {
        dob: "Date of Birth",
        age: "Age",
        gender: "Gender",
        country: "Country",
        disability: "Disability",
        interestedIn: "Interested In",
        genderPreference: "Gender Preference",
        countryPreference: "Country Preference",
        disabilityPreference: "Disability Preference",
        ageRange: "Age Preference",
        aboutMe: "About Me",
        interests: "Interests",
        photoURL: "Profile Picture",
      },
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
  },

  methods: {
    goToProfileForm() {
      this.$router.push("/user/profile-form/" + this.$store.state.auth.userId);
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

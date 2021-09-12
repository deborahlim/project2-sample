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
    <h1 class="display-3 m-5">Profile</h1>
    <div class="card m-5">
      <div class="card-header">
        <h1 class="display-4 my-3">{{ selectedUser.username }}</h1>
      </div>
      <div class="card-body mx-5">
        <h5
          v-for="(value, key) in this.selectedUser.profile"
          :key="key"
          class="card-title row text-start ms-5 "
        >
          <span class="text-start col-6">{{ keysToLabels[key] }}:</span>
          <span class="text-start col-6">{{ value }}</span>
        </h5>

        <button
          v-if="isCurrentUser"
          class="btn btn-primary m-3"
          @click="goToProfileForm"
        >
          Edit
        </button>
        <button
          v-if="isCurrentUser"
          class="btn btn-danger"
          @click="deleteClick = true"
        >
          Delete
        </button>
        <button
          v-if="!isCurrentUser"
          class="btn btn-primary"
          @click="goToBrowse"
        >
          Back
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
      selectedUser: null,
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
  props: ["id"],
  created() {
    this.loadSelectedUser(this.id);
  },
  watch: {
    id(newId) {
      return this.loadSelectedUser(newId);
    },
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.userId;
    },
    isCurrentUser() {
      return this.id === this.getCurrentUser;
    },
    getProfile() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
    },
  },

  methods: {
    goToProfileForm() {
      this.$router.push("/user/profile-form/" + this.$store.state.auth.userId);
    },
    goToBrowse() {
      this.$router.push("/browse");
    },
    async removeProfile() {
      this.loading = true;
      try {
        await this.$store.dispatch("deleteProfile");
        console.log("deleted");
        this.$router.push("/browse");
      } catch (err) {
        this.error = err.message;
        console.log(err);
      }
      this.loading = false;
      this.deleteClick = false;
    },
    displayProfile() {
      this.$store.dispatch("formatProfile");
    },
    loadSelectedUser(id) {
      let users = this.$store.getters.users;
      let profile =
        this.$store.state.auth.profile || this.$store.getters.profile;
      if (id === this.getCurrentUser) {
        this.selectedUser = this.$store.state.auth;
        this.selectedUser.profile = profile;
      } else {
        this.selectedUser = users.find((user) => user.id === id);
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style></style>

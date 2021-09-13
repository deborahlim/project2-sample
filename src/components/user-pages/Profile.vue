<template>
  <div class="overflow">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-confirm
      :show="deleteClick"
      content="Confirm Delete?"
      @confirm="removeProfile"
      @cancel="deleteClick = false"
    >
    </base-confirm>
    <h1 class="display-3 m-5">{{ selectedUser.username }}</h1>
    <div class="row d-flex align-items-center mb-3">
      <div class="col-6">
        <img
          :src="selectedUser.profile.photoURL"
          alt=""
          class="img"
          style="width:80%"
        />
      </div>
      <div class="col-6">
        <div class=" mx-5 text-start">
          <h3 class="display-7 py-3">Basic Information</h3>
          <div class="mx-3">
            <li class="">Date of Birth: {{ selectedUser.profile.dob }}</li>
            <li class="">Age: {{ selectedUser.profile.age }}</li>
            <li class="">Gender: {{ selectedUser.profile.gender }}</li>
            <li class="">Country: {{ selectedUser.profile.country }}</li>
          </div>
        </div>
        <div class=" mx-5 text-start">
          <h3 class="display-7 py-3">Preferences</h3>
          <div class="mx-3">
            <li class="">Interested In: {{ getInterestedIn }}</li>
            <li class="">Gender Preference: {{ getGenderPref }}</li>

            <li class="">
              Disability Preference:
              {{ selectedUser.profile.disabilityPreference }}
            </li>
            <li class="">Age Preference: {{ getAgeRange }}</li>
          </div>
        </div>
        <div class=" mx-5 text-start">
          <h3 class="display-7 py-3">Additional Information</h3>
          <div class="mx-3">
            <li class="">Interests and Hobbies: {{ getInterests }}</li>
            <li class="">About Me: {{ selectedUser.profile.aboutMe }}</li>
          </div>
        </div>
      </div>
    </div>
    <div class="">
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
      <button v-if="!isCurrentUser" class="btn btn-primary" @click="goToBrowse">
        Back
      </button>
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
    getAgeRange() {
      return `${this.selectedUser.profile.minAge} - ${this.selectedUser.profile.maxAge}`;
    },
    getInterests() {
      return this.selectedUser.profile.interests.join(", ");
    },

    getInterestedIn() {
      return this.selectedUser.profile.interestedIn.join(" and ");
    },

    getGenderPreference() {
      return this.selectedUser.profile.genderPreferance.join(" and ");
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

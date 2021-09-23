<template>
  <div class="overflow d-flex flex-column">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-confirm
      :show="deleteClick"
      content="Confirm Delete?"
      @confirm="removeProfile"
      @cancel="deleteClick = false"
    >
    </base-confirm>
    <div class="" v-if="!!selectedUser">
      <h1 class="display-3 m-5">{{ selectedUser.username }}</h1>
      <div class="row d-flex justify-content-center  m-3">
        <div class="col-lg-6">
          <img :src="selectedUser.profile.photoURL" alt="" class="profile" />
        </div>
        <div class="col-lg-6 text-start ps-5">
          <h3 class="display-7 my-3 text-underline">Basic Information</h3>

          <ul class="details">
            <li>Date of Birth: {{ selectedUser.profile.dob }}</li>
            <li class="">Age: {{ selectedUser.profile.age }}</li>
            <li class="">Gender: {{ selectedUser.profile.gender }}</li>
            <li class="">Country: {{ selectedUser.profile.country }}</li>
          </ul>

          <h3 class="display-7 my-3">Preferences</h3>

          <ul class="details">
            <li class="">Interested In: {{ getInterestedIn }}</li>
            <li class="">Gender Preference: {{ getGenderPref }}</li>
            <li class="">
              Disability Preference:
              {{ selectedUser.profile.disabilityPreference }}
            </li>
            <li class="">Age Preference: {{ getAgeRange }}</li>
          </ul>

          <h3 class="display-7 my-3">Additional Information</h3>

          <ul class="details">
            <li>Disability: {{ selectedUser.profile.disability }}</li>
            <li class="">Interests and Hobbies: {{ getInterests }}</li>
            <li class="">About Me: {{ selectedUser.profile.aboutMe }}</li>
          </ul>
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
        <button
          v-if="!isCurrentUser"
          class="me-3 btn btn-primary"
          @click="goToBrowse"
        >
          Back
        </button>
        <button
          class="  btn btn-primary"
          v-if="!isCurrentUser"
          @click="goToChats"
        >
          Let chat!
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
      isLoading: true,
      deleteClick: false,
      selectedUser: null,
    };
  },
  props: ["id"],
  created() {
    this.loadSelectedUser(this.id);
    this.isLoading = false;
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

    getGenderPref() {
      return this.selectedUser.profile.genderPreference.join(" and ");
    },
  },

  methods: {
    goToProfileForm() {
      this.$router.push("/user/profile-form/" + this.$store.state.auth.userId);
    },
    goToBrowse() {
      this.$router.push("/browse");
    },
    goToChats() {
      this.$router.push(
        "/user/chats/" +
          this.$store.state.auth.userId +
          "/" +
          this.selectedUser.username
      );
    },
    async removeProfile() {
      this.loading = true;
      try {
        await this.$store.dispatch("deleteProfile");
        this.$router.push("/browse");
      } catch (err) {
         console.dir(err);
        this.error =
          err.response === undefined
            ? err.message
            : err.response.data.error.message;
      
      }
      this.loading = false;
      this.deleteClick = false;
    },

    async loadSelectedUser(id) {
      // load profile
      await this.$store.dispatch("getUpdatedProfile");
      // if user clicks a profile in matches before going to the browse tab
      let users =
        this.$store.getters.users.length !== 0
          ? this.$store.getters.users
          : this.$store.getters.matches;

// if user goes to my profile tab after creating an account 
      let profile =
        this.$store.getters.profile || this.$store.state.auth.profile;
        // selectedUser gets current user details
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

<style scoped>
.details {
  list-style: none;
  font-size: 1.5rem;
}

.profile {
  height: 600px;
  width: 70%;
  object-fit: cover;
  object-position: top;
}
</style>

<template>
  <div class="container-fluid overflow">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Something Went Wrong!"
      :content="error"
      @close="handleError"
    >
    </base-modal>

    <div class="hero" v-if="!!checkProfileCompleted === false">
      <h1 class="display-1 m-3">Create Your Profile Today!</h1>
      <button @click="goToCreateProfile" class=" btn btn-lg btn-danger">
        Create Profile
      </button>
    </div>
    <h1 v-else-if="hasMatches" class="display-3 m-5">Your Matches</h1>
    <div class="hero" v-else>
      <h1 class="m-5">
        Sorry, you do not have not matches currently.
      </h1>
      <button class="btn btn-lg btn-dark" @click="goToAllUsers">
        Browse All Users
      </button>
    </div>

    <div class="row m-4">
      <base-profile-card
        v-for="user in filteredMatches"
        :key="user.id"
        :photoURL="user.profile.photoURL"
        :id="user.id"
        :age="user.profile.age"
        :username="user.username"
        :country="user.profile.country"
        :gender="user.profile.gender"
        :interests="user.profile.interests"
        :disability="user.profile.disability"
        :interestedIn="user.profile.interestedIn"
      ></base-profile-card>
    </div>
  </div>
  <!--  <h1 class="display-3 m-3">Your Groups</h1> -->
</template>

<script>
import socket from "./../../socket";
export default {
  name: "User",
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredMatches() {
      return this.$store.getters.matches;
    },
    checkProfileCompleted() {
      return !!(this.$store.state.auth.profile || this.$store.getters.profile);
    },
    hasMatches() {
      return this.$store.getters.hasMatches;
    },
  },
  methods: {
    goToCreateProfile() {
      this.$router.replace(
        "/user/profile-form/" + this.$store.state.auth.userId
      );
    },
    goToAllUsers() {
      this.$router.replace("/browse");
    },
    async loadMatches() {
      this.isLoading = true;
      if (this.checkProfileCompleted) {
        try {
          await this.$store.dispatch("getMatches");
        } catch (err) {
          this.error = err.message;
          console.log(err.message);
        }
      } else {
        this.error = "Create a profile to see your matches!";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadMatches();
    socket.connect();
  },
};
</script>

<style>
.centered {
  height: 100vh;
}
</style>

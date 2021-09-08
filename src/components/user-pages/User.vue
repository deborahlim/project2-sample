<template>
  <div class="container-fluid">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Something Went Wrong!"
      :content="error"
      @close="handleError"
    >
    </base-modal>

    <div class="hero">
      <div class="" v-if="!!checkProfileCompleted === false">
        <h1 class="display-1 m-3">Create Your Profile Today!</h1>
        <button @click="goToCreateProfile" class=" btn btn-lg btn-danger">
          Create Profile
        </button>
      </div>
      <h1 v-else-if="hasMatches" class="display-3 m-5">Your Matches</h1>
      <div v-else>
        <h1 class="m-5">
          Sorry, you do not have not matches currently.
        </h1>
        <button class="btn btn-lg btn-dark">Browse All Users</button>
      </div>
    </div>
    <div class="row m-4">
      <div
        class="col-sm-4 mb-4 "
        v-for="match of filteredMatches.matches"
        :key="match.id"
      >
        <div class="card">
          <img :src="match.profile.photoURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">
              {{ match.username }}, {{ match.profile.age }}
            </h5>
            <p class="card-text">{{ match.profile.aboutMe }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                I Live in {{ match.profile.country }}
              </li>
              <li class="list-group-item">I Am {{ match.profile.gender }}</li>
              <li class="list-group-item">
                I Love
                <p class="mb-0" v-for="el of match.profile.interests" :key="el">
                  {{ match.profile.interests.length > 1 ? el + "," : el }}
                </p>
              </li>
              <li class="list-group-item">
                Living With: {{ match.profile.disability }}
              </li>
              <li class="list-group-item">
                <span
                  class="mb-0"
                  v-for="el of match.profile.interestedIn"
                  :key="el"
                >
                  I am interested in: {{ el }}
                </span>
              </li>
              <li class="list-group-item">
                My Preferences: {{ match.profile.disabilityPreference }},
                <span
                  class="mb-0"
                  v-for="el of match.profile.genderPreference"
                  :key="el"
                >
                  {{ el }}</span
                >
              </li>
            </ul>
            <a href="#" class="mt-2 btn btn-primary">Let chat!</a>
          </div>
        </div>
      </div>
    </div>
    <!--  <h1 class="display-3 m-3">Your Groups</h1> -->
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      isLoading: true,
      error: null,
    };
  },
  computed: {
    filteredMatches() {
      return this.$store.getters.matches;
    },
    checkProfileCompleted() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
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

    async loadMatches() {
      if (this.checkProfileCompleted) {
        try {
          await this.$store.dispatch("getMatches");
        } catch (err) {
          this.error = err.message;
          console.log(err);
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
  },
};
</script>

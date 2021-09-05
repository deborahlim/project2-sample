<template>
  <div class="container-fluid">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      v-if="!!this.$store.getters.hasMatches"
      :show="!!error"
      title="Sorry, you currently do not have any matches"
      :content="error"
      @close="handleError"
    >
    </base-modal>
    <base-modal
      v-else
      :show="!!error"
      title="Something Went Wrong!"
      :content="error"
      @close="handleError"
    >
    </base-modal>
    <h1 class="display-3 m-5">Your Matches</h1>
    <div class="row m-4">
      <div
        class="col-sm-4 mb-4 "
        v-for="match of filteredMatches.matches"
        :key="match.id"
      >
        <div class="card">
          <img :src="match.profile.photoURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ match.username }}</h5>
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
    <h1 class="display-3 m-3">Your Groups</h1>
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
  },
  methods: {
    checkArrLength(arr) {
      return arr.length;
    },
    async loadMatches() {
      try {
        await this.$store.dispatch("getMatches");
      } catch (err) {
        this.error = err.message || "You have not created a profile!";
        console.log(err);
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

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

    <h1 class=" m-5 display-4">Explore and Discover</h1>
    <div class="row my-3">
      <p class=" col-6 text-start fw-bold fs-4">Search By</p>
      <p class=" col-6 text-end fw-bold fs-4">
        Number of Search Results: {{ getUserCount }}
      </p>
    </div>

    <div class="row">
      <div class="col-sm-4 md-3">
        <label class="form-label" for="">Username</label>
        <input
          class="form-control"
          type="text"
          v-model="usernameSearch"
          placeholder="Type to search"
        />
      </div>
      <div class="col-sm-4 md-3">
        <label for="" class="form-label">Country</label>
        <input
          class="form-control"
          list="countryOptions"
          id="countryList"
          placeholder="Type to select"
          v-model="countrySearch"
        />
        <datalist id="countryOptions">
          <option v-for="country in countries" :key="country.name">{{
            country.name
          }}</option>
        </datalist>
      </div>
      <div class="col-sm-4 md-3">
        <label for="" class="form-label">Disability</label>
        <input
          class="form-control"
          list="disabilityPreferenceOptions"
          id="disabilityPreferenceList"
          placeholder="Type to select "
          v-model="disabilitySearch"
        />
        <datalist id="disabilityPreferenceOptions">
          <option value="Open To All Disabilities" />
          <option
            v-for="disability in getDisabilityOptions"
            :key="disability"
            >{{ disability }}</option
          >
        </datalist>
      </div>
    </div>
    <div class="row m-4" v-if="!isLoading">
      <h3 class="display-6 mt-5 mb-3">Results</h3>
      <base-profile-card
        v-for="user in filteredUsers"
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
</template>

<script>
import countries from "./../../assets/countries";

export default {
  name: "User",

  data() {
    return {
      isLoading: true,
      error: null,
      genderSearch: null,
      ageSearch: "",
      usernameSearch: "",
      countrySearch: "",
      disabilitySearch: "",
      countries: countries,
      sortBy: null,
    };
  },
  computed: {
    getUserCount() {
      return this.filteredUsers.length;
    },
    filteredUsers() {
      let filtered = [];
      for (let p of this.$store.getters.users) {
        if (
          p.username.includes(this.usernameSearch) &&
          p.profile.country.includes(this.countrySearch) &&
          p.profile.disability.includes(this.disabilitySearch)
        ) {
          filtered.push(p);
        }
      }
      return filtered;
    },
    checkProfileCompleted() {
      return this.$store.state.auth.profile;
    },
    getDisabilityOptions() {
      return this.$store.state.user.disabilities;
    },
  },
  methods: {
    goToCreateProfile() {
      this.$router.push({
        name: "createProfile",
        params: { id: this.$store.state.auth.userId },
      });
    },
    async loadAllUsers() {
      try {
        await this.$store.dispatch("getAllUsers");
      } catch (err) {
     this.error =
          err.response === undefined
            ? err.message
            : err.response.data.error.message;
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadAllUsers();
  },
};
</script>

<style>
.overflow {
  background-color: #d6cbcb;
}
</style>

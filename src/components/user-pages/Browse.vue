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

    <h1 class=" m-5 display-4">Explore and Discover</h1>
    <div class="row my-3">
      <p class=" col-6 text-start fw-bold fs-4">Search By</p>
      <p class=" col-6 text-end fw-bold fs-4">
        Number of Search Results: {{ getUserCount }}
      </p>
    </div>

    <div
      class="row  
    "
    >
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
        <label for="" class="form-label">Disability Preference</label>
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

    <div class="row m-4">
      <div class="col-sm-4 mb-4 " v-for="user in filteredUsers" :key="user.id">
        <div class="card">
          <img :src="user.profile.photoURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">
              {{ user.username }}
            </h5>
            <p class="card-text">{{ user.profile.aboutMe }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                I Live in {{ user.profile.country }}
              </li>
              <li class="list-group-item">I Am {{ user.profile.gender }}</li>
              <li class="list-group-item">
                I Love
                <span
                  class="mb-0"
                  v-for="el of user.profile.interests"
                  :key="el"
                >
                  {{ el }}
                </span>
              </li>
              <li class="list-group-item">
                Living With: {{ user.profile.disability }}
              </li>
              <li class="list-group-item">
                I am interested in:
                <span
                  class="mb-0"
                  v-for="el of user.profile.interestedIn"
                  :key="el"
                >
                  {{ el }}
                </span>
              </li>
              <li class="list-group-item">
                My Preferences: {{ user.profile.disabilityPreference }},
                <span
                  class="mb-0"
                  v-for="el of user.profile.genderPreference"
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
        if (p.username.includes(this.usernameSearch)) {
          filtered.push(p);
        }
      }
      return filtered;
    },
    checkProfileCompleted() {
      return this.$store.state.auth.profile;
    },
    hasUsers() {
      return this.$store.getters.hasUsers;
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
        this.error = err.message;
        console.log(err);
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

<template>
  <div class="overflow">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Error!"
      :content="error"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-modal>
    <div
      v-if="form === 1 && prevRoutePath.includes('join-us') && !!alert"
      class="alert alert-success alert-box"
      role="alert"
    >
      Your account has been created!
    </div>
    <div class="mx-auto m-5" style="width: 50vw">
      <h1 v-if="hasProfile" class="display-5 m-5">
        Update your profile
      </h1>

      <div v-else>
        <h1 class="display-5 m-5">Create your profile</h1>
      </div>
      <!-- FORM 1 -->

      <div v-if="form == 1" class="fw-bold">
        <div class="mx-auto text-center">
          <p class="lead">Step 1 of 3: Tell us about yourself</p>
        </div>
        <form class="text-start">
          <div class="mb-4">
            <label for="" class="form-label">Date of Birth</label>
            <input
              class="form-control"
              type="date"
              name="dob"
              v-model="getProfile.dob"
            />
          </div>
          <div class="mb-4">
            <label for="" class="form-label">Gender</label>
            <div class="">
              <div class="form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  v-model="getProfile.gender"
                />
                <label class="form-label fw-normal ms-1" for="male">
                  Male</label
                >
              </div>
              <div class="form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  v-model="getProfile.gender"
                />
                <label class="form-label fw-normal ms-1" for="female">
                  Female</label
                >
              </div>
              <div class="form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="non-binary"
                  value="non-binary"
                  v-model="getProfile.gender"
                />
                <label class="form-label fw-normal ms-1" for="non-binary">
                  Non-Binary</label
                >
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label for="" class="form-label">Country</label>
            <input
              class="form-control"
              list="countryOptions"
              id="countryList"
              placeholder="Type to select country"
              v-model="getProfile.country"
            />
            <datalist id="countryOptions">
              <option v-for="country in countries" :key="country.name">{{
                country.name
              }}</option>
            </datalist>
          </div>

          <div class="mb-4">
            <label for="" class="form-label">Disability</label>
            <input
              class="form-control"
              list="disabilityOptions"
              id="disabilityList"
              placeholder="Type to select disability"
              v-model="getProfile.disability"
            />
            <datalist id="disabilityOptions">
              <option v-for="disability in getDisabilities" :key="disability">{{
                disability
              }}</option>
            </datalist>
          </div>
        </form>
        <button
          class="btn btn-outline-danger me-3"
          @click="goUserOrProfilePage"
        >
          Cancel
        </button>
        <button class="btn btn-outline-danger" @click="next()">
          Next
        </button>
      </div>

      <!-- FORM 2 -->
      <div
        class="text-start"
        v-if="form == 2"
        @back-to-profile1-btn-click="setForm(1)"
        @create-profile3-btn-click="setForm(3)"
      >
        <div class="mx-auto text-center">
          <p class="lead">Step 2 of 3: Tell us about your preferences</p>
        </div>
        <form class="fw-bold">
          <div class="mb-4">
            <p class="">What are you interested In?</p>
            <div class="">
              <div class="form-check-inline">
                <input
                  type="checkbox"
                  value="friendships"
                  class="form-check-input me-1"
                  id="friendships"
                  v-model="getProfile.interestedIn"
                />
                <label for="friendships" class="form-label fw-normal"
                  >Friendships</label
                >
              </div>
              <div class="form-check-inline">
                <input
                  type="checkbox"
                  value="dating"
                  class="form-check-input me-1"
                  id="dating"
                  v-model="getProfile.interestedIn"
                />
                <label for="dating" class="form-label fw-normal">Dating</label>
              </div>
            </div>
          </div>
          <div class="mb-4 ">
            <p class="">What is your gender preference?</p>
            <div class="">
              <div class="form-check-inline">
                <input
                  type="checkbox"
                  value="male"
                  class="form-check-input me-1"
                  id="p-male"
                  v-model="getProfile.genderPreference"
                />
                <label for="p-male" class="form-label fw-normal">Male</label>
              </div>
              <div class="form-check-inline">
                <input
                  type="checkbox"
                  value="female"
                  class="form-check-input me-1"
                  v-model="getProfile.genderPreference"
                  id="p-female"
                />
                <label for="p-female" class="form-label fw-normal"
                  >Female</label
                >
              </div>
            </div>
          </div>

          <div class="mb-4">
            <p>Age Range</p>
            <div>
              <select class="form-select" v-model="getProfile.minAge">
                <option value="18">18</option>
                <option :value="n + 18" v-for="n in 82" :key="n">{{
                  n + 18
                }}</option>
              </select>
              to
              <select class="form-select" v-model="getProfile.maxAge">
                <option value="100">100</option>
                <option :value="n + 18" v-for="n in 82" :key="n">{{
                  n + 18
                }}</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label for="" class="form-label">Country</label>
            <input
              class="form-control"
              list="countryOptions"
              id="countryList"
              placeholder="Type to select country"
              v-model="getProfile.countryPreference"
            />
            <datalist id="countryOptions">
              <option v-for="country in countries" :key="country.name">{{
                country.name
              }}</option>
            </datalist>
          </div>
          <div class="mb-4">
            <label for="" class="form-label">Disability Preference</label>
            <input
              class="form-control"
              list="disabilityPreferenceOptions"
              id="disabilityPreferenceList"
              placeholder="Type to select disability preference"
              v-model="getProfile.disabilityPreference"
            />
            <datalist id="disabilityPreferenceOptions">
              <option value="Open To All Disabilities" />
              <option v-for="disability in getDisabilities" :key="disability">{{
                disability
              }}</option>
            </datalist>
          </div>
        </form>
        <button class="btn btn-outline-danger me-3" @click="prev()">
          Back
        </button>
        <button class="btn btn-outline-danger" @click="next()">
          Next
        </button>
      </div>

      <!-- FORM 3 -->
      <div
        class="text-start"
        v-if="form == 3"
        @back-to-profile2-btn-click="setForm(2)"
      >
        <div class="mx-auto text-center">
          <p class="lead">Step 3 of 3: Tell us more about yourself</p>
        </div>
        <form class="fw-bold">
          <div class="mb-4">
            <label for="" class="form-label">About Me</label>
            <textarea
              class="form-control"
              type="textarea"
              rows="3"
              placeholder="Write about yourself"
              v-model="getProfile.aboutMe"
            ></textarea>
          </div>
          <div class="mb-4">
            <p class="form-label">Hobbies and Interests</p>
            <select
              name="interest"
              size="8"
              class="form-select"
              v-model="getProfile.interests"
              multiple
            >
              <option selected>Choose one or more options below: </option>
              <option
                v-for="interest in interests"
                :key="interest.hobby"
                :value="interest.hobby"
                >{{ interest.hobby }}</option
              >
            </select>
          </div>

          <div class="mb-4">
            <label for="" class="form-label">Upload Photo</label>
            <input
              class="form-control"
              type="url"
              name="photo"
              v-model="getProfile.photoURL"
              placeholder="Enter your photo URL"
            />
          </div>
        </form>
        <button class="btn btn-outline-danger me-3" @click="prev()">
          Back
        </button>
        <button class="btn btn-outline-danger" @click="submitFull">
          Finish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "./../../assets/countries";
import interests from "./../../assets/interests";
export default {
  name: "ProfileForm",
  components: {},
  data() {
    return {
      form: 1,
      isLoading: false,
      error: null,
      inputs: {
        dob: null,
        gender: null,
        country: null,
        disability: null,
        interestedIn: [],
        genderPreference: [],
        minAge: 18,
        maxAge: 100,
        countryPreference: null,
        disabilityPreference: null,
        aboutMe: null,
        interests: [],
        photoURL: null,
      },
      countries: countries,
      interests: interests,
      prevRoute: null,
      alert: false,
    };
  },
  watch: {
    // To make alert disappear after 2s
    alert() {
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },
  },
  computed: {
    hasProfile() {
      return this.$store.state.auth.profile || this.$store.getters.profile;
    },
    getProfile() {
      let profile =
        this.$store.state.auth.profile || this.$store.getters.profile;
      return profile ? profile : this.inputs;
    },
    getDisabilities() {
      return this.$store.state.user.disabilities;
    },
    prevRoutePath() {
      return this.prevRoute ? this.prevRoute.path : "/";
    },
  },
  mounted() {
    this.alert = true;
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  methods: {
    setForm(form) {
      this.form = form;
    },
    prev() {
      this.form--;
    },
    next() {
      this.form++;
    },
    goUserOrProfilePage() {
      if (this.hasProfile) {
        this.$router.replace("/user/profile/" + this.$store.state.auth.userId);
      } else {
        this.$router.replace("/user/" + this.$store.state.auth.userId);
      }
    },

    async submitFull() {
      this.loading = true;
      try {
        await this.$store.dispatch("createProfile", this.getProfile);
        this.$router.replace("/user/" + this.$store.state.auth.userId);
      } catch (err) {
        console.dir(err);
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
};
</script>

<style>
.alert-box {
  position: absolute;
  right: 0;
}
</style>

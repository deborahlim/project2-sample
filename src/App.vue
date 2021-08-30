<template>
  <div id="app">
    <div class="navbar bg-danger">
      <div class="container-fluid">
        <ul class="nav nav-tab me-auto mb-lg-0">
          <li class="nav-item">
            <button class="btn text-uppercase" @click="goHome">Home</button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="joinUs">Join Us</button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="learnAboutUs">
              About Us
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="seeReviews">
              Our Reviews
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="makeEnquiry">
              Contact Us
            </button>
          </li>
        </ul>
        <button class="btn btn-sm btn-outline-light">Log In</button>
      </div>
    </div>

    <Home v-if="page == 'home'" @join-button-click="joinUs" />
    <JoinUs
      v-if="page == 'join-us'"
      v-on:create-profile-btn-click="goToProfile"
    />
    <AboutUs v-if="page == 'about-us'" />
    <Reviews v-if="page == 'reviews'" />
    <Contact v-if="page == 'contact'" />
    <CreateProfile
      v-if="page == 'create-profile'"
      @create-profile2-btn-click="goToProfile2"
    />
    <CreateProfile2 v-if="page == 'create-profile-2'" @back-to-profile1-btn-click="goToProfile" @create-profile3-btn-click="goToProfile3" />
       <CreateProfile3 v-if="page == 'create-profile-3'" @back-to-profile2-btn-click="goToProfile2" />
  </div>
</template>

<script>
import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import CreateProfile from "./components/CreateProfile.vue";
import CreateProfile2 from "./components/CreateProfile2.vue";
import CreateProfile3 from "./components/CreateProfile3.vue";
export default {
  name: "App",
  components: {
    JoinUs,
    Home,
    AboutUs,
    Reviews,
    Contact,
    CreateProfile,
    CreateProfile2,
       CreateProfile3,
  },
  data() {
    return {
      page: "home",
    };
  },
  methods: {
    goHome() {
      this.page = "home";
    },
    makeEnquiry() {
      this.page = "contact";
    },
    joinUs() {
      this.page = "join-us";
    },
    learnAboutUs() {
      this.page = "about-us";
    },
    seeReviews() {
      this.page = "reviews";
    },
    goToProfile() {
      this.page = "create-profile";
    },
    goToProfile2() {
      this.page = "create-profile-2";
    },
        goToProfile3() {
      this.page = "create-profile-3";
    },
  },
};
</script>

<style>
/* #ce4343 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #d6cbcb;
  /* background-position: top;
  background-size: cover; */
}
</style>

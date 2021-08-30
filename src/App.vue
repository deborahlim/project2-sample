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

    <Home v-if="page == 'home'" v-on:join-button-click="joinUs" />
    <JoinUs v-if="page == 'join-us'" v-on:create-profile-btn-click="goToProfile"/>
    <AboutUs v-if="page == 'about-us'" />
    <Reviews v-if="page == 'reviews'" />
    <Contact v-if="page == 'contact'" />
    <CreateProfile  v-if="page == 'create-profile'" />
  </div>
</template>

<script>
import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import CreateProfile from "./components/CreateProfile.vue";

export default {
  name: "App",
  components: {
    JoinUs,
    Home,
    AboutUs,
    Reviews,
    Contact,
    CreateProfile,
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

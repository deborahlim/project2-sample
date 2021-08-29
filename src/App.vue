<template>
  <div class="main">
    <div class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Logo</a>
        <ul class="nav nav-tab me-auto mb-lg-0">
          <li class="nav-item">
            <button @click="joinUs">Join Us</button>
          </li>
           <li>
            <button v-on:click="goHome">Home</button>
          </li>
          <li class="nav-item">
            <button @click='learnAboutUs'>About Us</button>
          </li>
          <li class="nav-item">
            <button @click="seeReviews">Reviews</button>
          </li>
          <li class="nav-item">
           <button v-on:click="makeReport">Safety and Reporting</button> 
          </li>
        </ul>
        <button>Log In</button>
      </div>
    </div>

    <Home v-if="page=='home'" v-on:join-button-click="joinUs"/>
    <JoinUs v-if="page=='join-us'"/>
    <AboutUs v-if="page=='about-us'"/>
    <Reviews v-if="page=='reviews'"/>
    <Report v-if="page=='report'"/>
  </div>
</template>

<script>
import JoinUs from './components/JoinUs.vue'
import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Reviews from './components/Reviews.vue'
import Report from './components/Report.vue'

export default {
  name: 'App',
  components: {
    JoinUs,
    Home,
    AboutUs,
    Reviews,
    Report
  },
  data() {
    return {
      page: "home"
    }
  },
  methods: {
    goHome() {
      this.page = "home"
    },
    makeReport() {
      this.page = "report"
    },
    joinUs() {
      this.page = 'join-us'
    },
    learnAboutUs() {
      this.page = 'about-us'
    },
    seeReviews() {
      this.page = 'reviews'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  height: 100vh
}

.hero {
  top: 50%;
  left: 50%;
  transform: translate(10vw, 40vh)
}
</style>

<template>
  <div id="app">
    <div class="navbar bg-danger">
      <div class="container-fluid">
        <ul class="nav nav-tab me-auto mb-lg-0">
          <li class="nav-item">
            <button class="btn text-uppercase" @click="setPage('Home')">
              Home
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="setPage('JoinUs')">
              Join Us
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="setPage('AboutUs')">
              About Us
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="setPage('Reviews')">
              Our Reviews
            </button>
          </li>
          <li class="nav-item">
            <button class="btn text-uppercase" @click="setPage('Contact')">
              Contact Us
            </button>
          </li>
        </ul>
        <button class="btn btn-sm btn-outline-light">Log In</button>
      </div>
    </div>

    <keep-alive>
      <component :is="page" @join-button-click="setPage('JoinUs')" @create-profile-btn-click="setPage('BaseForm')"></component>
    </keep-alive>

  </div>
</template>

<script>
import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import BaseForm from "./components/BaseForm.vue";

export default {
  name: "App",
  components: {
    JoinUs,
    Home,
    AboutUs,
    Reviews,
    Contact,
    BaseForm
 
  },
  data() {
    return {
      page: "Home",
    };
  },
  props: [],
  methods: {
    setPage(pg) {
      this.page = pg;
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

.sign-up {
  position: absolute;
  height: 100%;
  width: 50%;
  transform: translateX(50%);
}
</style>

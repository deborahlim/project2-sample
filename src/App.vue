<template>
  <div id="app">
    <!-- <keep-alive>
      <component
        :is="page"
        @join-button-click="setPage('JoinUs')"
        @create-profile-btn-click="setPage('CreateProfile')"
        @back-home-click="setPage('Home')"
        @go-to-profiles-click="setPage('Profiles')"
      ></component>
    </keep-alive> -->
    <TheNavbar v-if="!loggedIn" />
    <TheUserNav v-if="loggedIn" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheUserNav from "./components/layout/TheUserNav.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
    TheUserNav,
  },
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  props: [name],
  methods: {
    checkLoggedIn() {},
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
  /* width: 100vw; */
  background-color: #d6cbcb;
  /* background-position: top;
  background-size: cover; */
}

.sign-up {
  position: absolute;
  width: 50%;
  transform: translateX(50%);
}
</style>

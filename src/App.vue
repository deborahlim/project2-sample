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
    <TheNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
export default {
  name: "App",
  components: {
    TheNavbar,
  },
  data() {
    return {
      page: "Home",
      isLoggedIn: false,
    };
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

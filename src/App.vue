<template>
  <div id="app">
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
/* #2c3e50 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
  height: 100vh;
  background-color: #d6cbcb;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.sign-up {
  position: absolute;
  width: 50%;
  transform: translateX(50%);
}
.img {
  height: 500px;
  /* width: 100px; */
  object-fit: cover;
}
</style>

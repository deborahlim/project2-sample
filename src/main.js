import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store";
import BaseModal from "./../src/components/base/BaseModal";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// import axios from "axios";
library.add(faUserSecret, faWifi);

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:3000/special-connections";

Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: "history" });
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.component("base-modal", BaseModal);
Vue.component("Loading", Loading);
new Vue({
  router,
  store,
  BaseModal,
  Loading,
  render: (h) => h(App),
}).$mount("#app");

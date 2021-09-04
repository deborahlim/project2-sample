import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import CreateProfile from "./components/CreateProfile.vue";
import User from "./components/User.vue";
import Login from "./components/Login.vue";
import store from "./store/index.js";

export const routes = [
  { path: "/", component: Home, name: "home" }, // our-domain.com/teams => TeamsList
  { path: "/about-us", component: AboutUs, name: "aboutUs" },
  { path: "/join-us", component: JoinUs, name: "joinUs" },
  { path: "/reviews", component: Reviews, name: "reviews" },
  { path: "/contact", component: Contact, name: "contact" },
  {
    path: "/create-profile/:id",
    component: CreateProfile,
    name: "createProfile",
  },
  { path: "/login", component: Login, name: "login" },

  {
    path: "/user",
    component: User,
    name: "user",
    beforeEnter: (to, from, next) => {
      console.log(to.name);
      console.log(store);
      if (store.state.auth.token === undefined) {
        console.log("hi");
        next({ name: "home" });
      } else next();
    },
  },
];

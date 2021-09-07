import JoinUs from "./components/auth/JoinUs.vue";
import Home from "./components/pages/Home.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import Reviews from "./components/pages/Reviews.vue";
import Contact from "./components/pages/Contact.vue";
import ProfileForm from "./components/user-pages/ProfileForm.vue";
import Profile from "./components/user-pages/Profile.vue";
import User from "./components/user-pages/User.vue";
import Login from "./components/auth/Login.vue";
import Browse from "./components/user-pages/Browse.vue";
import WriteReview from "./components/user-pages/WriteReview.vue";
import store from "./store/index.js";

export const routes = [
  { path: "/browse", component: Browse, name: "browse" },
  { path: "/", component: Home, name: "home" }, // our-domain.com/teams => TeamsList
  { path: "/about-us", component: AboutUs, name: "aboutUs" },
  { path: "/join-us", component: JoinUs, name: "joinUs" },
  { path: "/reviews", component: Reviews, name: "reviews" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/login", component: Login, name: "login" },
  {
    path: "/user/:id",
    component: User,
    name: "user",
    beforeEnter: (to, from, next) => {
      if (store.state.auth.token === undefined) {
        next({ name: "home" });
      } else next();
    },
  },
  {
    path: "/user/profile-form/:id",
    component: ProfileForm,
    name: "profileForm",
  },
  { path: "/user/profile/:id", component: Profile, name: "profile" },
  {
    path: "/user/review/:id",
    component: WriteReview,
    name: "writeReview",
  },
];

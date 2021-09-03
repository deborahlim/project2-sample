import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import CreateProfile from "./components/CreateProfile.vue";
import User from "./components/User.vue";

export const routes = [
  { path: "/", component: Home, name: "home" }, // our-domain.com/teams => TeamsList
  { path: "/about-us", component: AboutUs, name: "aboutUs" },
  { path: "/join-us", component: JoinUs, name: "joinUs" },
  { path: "/reviews", component: Reviews, name: "reviews" },
  { path: "/user/:id", component: User, name: "user" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/create-profile", component: CreateProfile, name: "createProfile" },
];

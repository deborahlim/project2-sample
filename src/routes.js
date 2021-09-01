import JoinUs from "./components/JoinUs.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Reviews from "./components/Reviews.vue";
import Contact from "./components/Contact.vue";
import CreateProfile from "./components/CreateProfile.vue";
import User from "./components/User.vue";

export const routes = [
  { path: "/", component: Home }, // our-domain.com/teams => TeamsList
  { path: "/about-us", component: AboutUs },
  { path: "/join-us", component: JoinUs },
  { path: "/reviews", component: Reviews },
  { path: "/user/:id", component: User },
  { path: "/contact", component: Contact },
  { path: "/create-profile", component: CreateProfile },
];

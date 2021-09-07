import axios from "axios";

const state = {
  profile: null,
  matches: [],
  users: [],
  disabilities: [
    "Vision Impairment",
    "Deafness or Hardness of Hearing",
    "Intellectual Disability",
    "Mental Health Conditions",
    "Acquired Brain Injury",
    "Autism Spectrum Disorder",
    "Physical Disability",
    "Positive about Disability",
  ],
  review: null,
  // tokenExpiration: null,
};

const getters = {
  profile(state) {
    return state.profile;
  },
  matches(state) {
    return state.matches;
  },
  hasMatches(state) {
    return state.matches && state.matches.length > 0;
  },
  users(state) {
    return state.users;
  },
  review(state) {
    return state.review;
  },
};

const mutations = {
  setProfile(state, payload) {
    state.profile = payload;
  },
  setMatches(state, payload) {
    state.matches = payload;
    // state.tokenExpiration = payload.tokenExpiration;
  },

  setUsers(state, payload) {
    state.users = payload;
  },

  setReview(state, payload) {
    state.review = payload;
  },
};

const actions = {
  async createProfile(context, payload) {
    console.log(payload);
    let profile = {
      dob: payload.dob,
      gender: payload.gender,
      country: payload.country,
      disability: payload.disability,
      interestedIn: payload.interestedIn,
      genderPreference: payload.genderPreference,
      minAge: payload.minAge,
      maxAge: payload.maxAge,
      countryPreference: payload.countryPreference,
      disabilityPreference: payload.disabilityPreference,
      aboutMe: payload.aboutMe,
      interests: payload.interests,
      photoURL: payload.photoURL,
    };
    await axios.patch(
      "http://localhost:3000/special-connections/users/profile/" +
        context.rootState.auth.userId,
      profile
    );
    context.commit("setProfile", {
      profile,
    });
  },
  async getMatches(context) {
    const response = await axios.get(
      "http://localhost:3000/special-connections/users/" +
        context.rootState.auth.userId
    );

    // if (response.status !== 200) {
    //   const error = new Error(response.status || "No Matches");
    //   throw error;
    // }
    let matches = [];
    for (const match of response.data) {
      console.log(match);

      const m = {
        id: match._id,
        username: match.username,
        profile: match.profile,
      };
      matches.push(m);
    }
    context.commit("setMatches", {
      matches: matches,
      // tokenExpiration: response.expiresIn,
    });
  },
  async getAllUsers(context) {
    const response = await axios.get(
      "http://localhost:3000/special-connections/users/"
    );

    let users = [];
    for (const user of response.data) {
      console.log(user.profile.interestedIn);
      const u = {
        id: user._id,
        username: user.username,
        profile: user.profile,
      };
      users.push(u);
    }
    context.commit("setUsers", {
      users,
      // tokenExpiration: response.expiresIn,
    });
  },
  async postReview(context, payload) {
    const response = await axios.patch(
      "http://localhost:3000/special-connections/users/reviews/" +
        context.rootState.auth.userId,
      {
        review: payload.review,
      }
    );
    console.log(response.data);
    context.commit("setReview", {
      review: payload.review,
    });
  },
  logOut(context) {
    context.commit("setMatches", {
      matches: [],
      users: [],
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

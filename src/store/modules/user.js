import axios from "axios";

const state = {
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
  // tokenExpiration: null,
};

const getters = {
  matches(state) {
    return state.matches;
  },
  hasMatches(state) {
    return state.matches && state.matches.length > 0;
  },
  users(state) {
    return state.users;
  },
};

const mutations = {
  setMatches(state, payload) {
    state.matches = payload;
    // state.tokenExpiration = payload.tokenExpiration;
  },

  setUsers(state, payload) {
    state.users = payload;
  },
};

const actions = {
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

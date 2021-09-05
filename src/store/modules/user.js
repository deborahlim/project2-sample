import axios from "axios";

const state = {
  matches: [],
  // tokenExpiration: null,
};

const getters = {
  matches(state) {
    return state.matches;
  },
  hasMatches(state) {
    return state.matches && state.matches.length > 0;
  },
};

const mutations = {
  setMatches(state, payload) {
    state.matches = payload;
    // state.tokenExpiration = payload.tokenExpiration;
  },
};

const actions = {
  async getMatches(context) {
    const response = await axios.get(
      "http://localhost:3000/special-connections/users/" +
        context.rootState.auth.userId
    );

    console.log(response.data);
    if (response.status !== 200) {
      const error = new Error(response.status || "No Matches");
      throw error;
    }
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
  logOut(context) {
    context.commit("setMatches", {
      matches: [],
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

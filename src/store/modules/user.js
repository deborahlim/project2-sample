import axios from "axios";

const state = {
  matches: null,
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
      "http://localhost:3000/special-connections/users/613399d8ebcd5bd75b5ce7f9"
      // this.$store.state.auth.userId
    );
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
      matches,
      // tokenExpiration: response.expiresIn,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

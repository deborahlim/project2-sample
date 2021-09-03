import axios from "axios";

const state = {
  userId: null,
  token: null,
  // tokenExpiration: null,
};

const getters = {
  userId(state) {
    return state.userId;
  },
};

const mutations = {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};

const actions = {
  login() {},
  async signup(context, payload) {
    const response = await axios.post(
      "http://localhost:3000/special-connections/users/joinUs",
      {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        returnSercureToken: true,
      }
    );

    if (!response.ok) {
      console.log(response);
      const error = new Error(response.message || "Failed to authenticate.");
      throw error;
    }

    console.log(response);
    context.commit("setUser", {
      token: response.Token,
      userId: response.data.user.insertedId,
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

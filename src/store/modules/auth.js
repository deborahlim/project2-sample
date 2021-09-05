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
  token(state) {
    return state.token;
  },
  isLoggedIn(state) {
    return !!state.token;
    // to change to true boolean
  },
};

const mutations = {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.profile = payload.profile;
    // state.tokenExpiration = payload.tokenExpiration;
  },
};

const actions = {
  async login(context, payload) {
    let response = await axios.post(
      "http://localhost:3000/special-connections/users/login",
      {
        email: payload.email,
        password: payload.password,
        // returnSercureToken: true,
      }
    );

    // if (response.status !== 200) {
    //   console.log(response.status);
    //   // const error = new Error(response.status || "Failed to authenticate.");
    //   const error = response;
    //   console.log(error);
    //   throw error;
    // }
    context.commit("setUser", {
      token: response.data.token,
      userId: response.data.user._id,
      profile: response.data.user.profile,
      // tokenExpiration: response.expiresIn,
    });
    // }
  },

  async signup(context, payload) {
    const response = await axios.post(
      "http://localhost:3000/special-connections/users/joinUs",
      {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      }
    );

    if (response.status !== 201) {
      const error = new Error(response.status || "Failed to authenticate.");
      throw error;
    }
    context.commit("setUser", {
      token: response.data.token,
      userId: response.data.data.user.insertedId,
      // tokenExpiration: response.expiresIn,
    });
  },
  logOut(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

const customAxios = require("./../../utils/customAxios");

const state = {
  enquiries: [],
  // tokenExpiration: null,
};

const getters = {
  enquiry(state) {
    return state.enquiries;
  },
};

const mutations = {
  addEnquiry(state, payload) {
    state.enquiries.push(payload.newEnquiry);
    // state.tokenExpiration = payload.tokenExpiration;
  },
  setEnquiries(state, payload) {
    state.enquiries = payload.enquiries;
  },
};

const actions = {
  async sendEnquiry(context, payload) {
    let error;
    let newEnquiry = {
      name: payload.name,
      email: payload.email,
      enquiry: payload.enquiry,
    };
    let response = await customAxios
      .post("enquiry", newEnquiry)
      .catch((err) => {
        console.dir(err);
        error = err.response.data.message;
        throw error;
      });

    console.log(response);
    newEnquiry.id = response.data.id;
    context.commit("addEnquiry", {
      newEnquiry,
    });
  },
  async loadEnquiries(context) {
    let error;
    let response = await customAxios.get("enquiry").catch((err) => {
      console.dir(err);
      error = err.response.data.message;
      throw error;
    });
    console.log(response.data);
    context.commit("setEnquires", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

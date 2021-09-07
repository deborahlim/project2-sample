import axios from "axios";

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
  setEnquiry(state, payload) {
    state.enquiries = payload.enquiries;
  },
};

const actions = {
  async sendEnquiry(context, payload) {
    let newEnquiry = {
      name: payload.name,
      email: payload.email,
      enquiry: payload.enquiry,
    };
    let response = await axios.post(
      "http://localhost:3000/special-connections/enquiry",
      newEnquiry
    );

    // if (response.status !== 200) {
    //   console.log(response.status);
    //   // const error = new Error(response.status || "Failed to authenticate.");
    //   const error = response;
    //   console.log(error);
    //   throw error;
    // }
    console.log(response);
    newEnquiry.id = response.data.id;
    context.commit("addEnquiry", {
      newEnquiry,
      // tokenExpiration: response.expiresIn,
    });
    // }
  },
  async loadEnquiries(context) {
    let response = await axios.get(
      "http://localhost:3000/special-connections/enquiry"
    );
    console.log(response.data);
    context.commit("get", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

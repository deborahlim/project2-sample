import axios from "axios";

const state = {
  profile: null,
  formattedProfile: null,
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
  formattedProfile(state) {
    return state.formattedProfile;
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
    state.matches = payload.matches;
    // state.tokenExpiration = payload.tokenExpiration;
  },

  setUsers(state, payload) {
    console.log(payload);
    state.users = payload.users;
  },

  setReview(state, payload) {
    state.review = payload;
  },
  setFormattedProfile(state, payload) {
    state.formattedProfile = payload;
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
  formatProfile(context) {
    let formattedProfile = JSON.parse(
      JSON.stringify(context.rootState.auth.profile)
    );
    if (formattedProfile.interestedIn.length > 0) {
      formattedProfile.interestedIn = formattedProfile.interestedIn.join(", ");
    } else {
      formattedProfile.interestedIn = "-";
    }

    if (formattedProfile.genderPreference.length > 0) {
      formattedProfile.genderPreference = formattedProfile.genderPreference.join(
        "and"
      );
    } else {
      formattedProfile.genderPreference = "-";
    }

    formattedProfile.ageRange = `${formattedProfile.minAge} - ${formattedProfile.maxAge}`;
    delete formattedProfile.minAge;
    delete formattedProfile.maxAge;
    if (formattedProfile.interests.length > 0) {
      formattedProfile.interests = formattedProfile.interests.join(", ");
    } else formattedProfile.interests = "";

    context.commit("setFormattedProfile", formattedProfile);
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
      matches,
      // tokenExpiration: response.expiresIn,
    });
  },
  async getAllUsers(context) {
    const response = await axios.get(
      "http://localhost:3000/special-connections/users/"
    );

    let users = [];
    for (const user of response.data) {
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
  async deleteProfile(context) {
    await axios.patch(
      "http://localhost:3000/special-connections/users/profile/" +
        context.rootState.auth.userId
    );

    context.commit("setProfile", null);
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
      profile: null,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

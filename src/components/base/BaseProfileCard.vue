<template>
  <div class="col-sm-4 mb-4 ">
    <div class="card">
      <img :src="photoURL" class="img" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ username }}, {{ age }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">I Live in {{ country }}</li>
          <li class="list-group-item">I Am {{ gender }}</li>
          <li class="list-group-item">
            I Love
            <span class="mb-0" v-for="el of interests" :key="el">
              {{ el }}
            </span>
          </li>
          <li class="list-group-item">Living With: {{ disability }}</li>
          <li class="list-group-item">
            I am interested in:
            <span class="mb-0" v-for="el of interestedIn" :key="el">
              {{ el }}
            </span>
          </li>
        </ul>
        <button class="mt-2  me-3 btn btn-primary">Let chat!</button>
        <button class="mt-2 btn btn-primary" @click="goToMyProfile">
          My Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "age",
    "photoURL",
    "username",
    "country",
    "gender",
    "interests",
    "disability",
    "interestedIn",
  ],
  computed: {},
  methods: {
    goToMyProfile() {
      console.log(this.id);
      this.$router.push("/user/profile/" + this.id);
    },
  },
};
</script>

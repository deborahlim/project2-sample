<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4 ">
    <div class="card">
      <img :src="photoURL" class="img" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ username }}, {{ age }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">I Live in {{ country }}</li>
          <li class="list-group-item">I Am {{ gender }}</li>
          <li class="list-group-item truncate">I Love {{ getInterests }}</li>
          <li class="list-group-item truncate">
            Living With: {{ disability }}
          </li>
          <li class="list-group-item truncate">
            I am interested in: {{ getInterestedIn }}
          </li>
        </ul>

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
  computed: {
    getInterests() {
      return this.interests.join(", ");
    },
    getInterestedIn() {
      return this.interestedIn.join(" and ");
    },
  },
  methods: {
    goToMyProfile() {
      this.$router.push("/user/profile/" + this.id);
    },
  },
};
</script>
<style>
.img {
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

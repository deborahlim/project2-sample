<template>
  <div class="overflow">
    <h1 class="display-4 m-5">
      Dating service and Social Network for Disabled People
    </h1>
    <p class="p-5">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    </p>
    <div class="" v-if="loadReviewsSuccess">
      <h3>What our members are saying</h3>
      <div class="row mx-3 my-5">
        <div class="col-sm-4" v-for="user in getReviews" :key="user.username">
          <div class="card p-3 h-100">
            <div class="card-title">
              <h1>{{ user.username }}</h1>
            </div>
            <div class="card-text">
              <p>{{ user.review }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>{{ error }}</h3>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      loadReviewsSuccess: false,
      error: null,
    };
  },
  computed: {
    getReviews() {
      return this.$store.state.user.reviews;
    },
  },
  created() {
    this.displayReviews();
  },
  methods: {
    async displayReviews() {
      try {
        await this.$store.dispatch("loadReviews");
        this.loadDataSuccess = true;
      } catch (err) {
        console.dir(err);
        this.error = err.message || err.response.data.error.message;
      }
    },
  },
};
</script>
<style></style>

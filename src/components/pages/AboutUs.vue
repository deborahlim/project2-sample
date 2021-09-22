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
</template>

<script>
export default {
  name: "AboutUs",
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
      await this.$store.dispatch("loadReviews");
    },
  },
};
</script>
<style></style>

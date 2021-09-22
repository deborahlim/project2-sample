<template>
  <div class="overflow">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Error!"
      :content="error"
      @close="handleError"
    >
    </base-modal>
    <div class="form">
      <div class="alert alert-success alert-box" v-if="submitted">
        Thank you! Your review has been submitted.
      </div>
      <h1 class="display-3 m-5">Write A Review</h1>
      <p class="fw-bold fs-4">
        Let us know about your experience so far
      </p>
      <form action="POST" class="mx-auto m-5" style="width: 50vw">
        <div class="mb-5 d-flex justify-content-center fw-bold fs-5">
          <label for="" class="form-label me-3">Username: </label>
          <p class="">{{ getUserName }}</p>
        </div>
        <div class="mb-5 fw-bold fs-5">
          <label for="" class="form-label">Your Review</label>
          <textarea class="form-control" rows="3" v-model="review" />
        </div>
        <button class="btn btn-lg btn-danger" @click.prevent="submitReview">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriteReview",
  data() {
    return {
      review: null,
      isLoading: false,
      error: null,
      submitted: false,
    };
  },
  computed: {
    getUserName() {
      return this.$store.state.auth.username;
    },
  },
  watch: {},
  methods: {
    async submitReview() {
      this.isLoading = true;
      if (this.review !== null) {
        try {
          await this.$store.dispatch("postReview", {
            review: this.review,
          });
          this.isLoading = false;
          this.submitted = true;
          this.review = null;
          setTimeout(() => (this.submitted = false), 2000);
        } catch (err) {
          console.log(err);
          this.error =
            err.message ||
            "Something went wrong! Could not submit review. Try again later";
        }
      } else {
        this.isLoading = false;
        this.error = "Review cannot be blank";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

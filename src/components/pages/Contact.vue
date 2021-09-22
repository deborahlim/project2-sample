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
      <div class="alert alert-success" v-if="submitted">
        Thank you! Your review has been submitted.
      </div>
      <h1 class="display-4 m-5">Contact Us</h1>
      <p class="fw-bold fs-4">
        Have a question? Drop us a line and we will get back to you shortly
      </p>
      <form action="POST" class="mx-auto m-5" style="width: 50vw">
        <div class="mb-5">
          <label for="" class="form-label">Name</label>
          <input class="form-control" type="text" v-model="name" />
        </div>
        <div class="mb-5">
          <label for="" class="form-label">Email Address</label>
          <input class="form-control" type="email" v-model="email" />
        </div>
        <div class="mb-5">
          <label for="" class="form-label">Enquiry</label>
          <textarea
            class="form-control"
            type="textarea"
            rows="3"
            v-model="enquiry"
          ></textarea>
        </div>
        <button class="btn btn-danger" @click.prevent="submitContact">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
      name: null,
      email: null,
      enquiry: null,
      isLoading: false,
      error: null,
      submitted: false,
    };
  },

  methods: {
    async submitContact() {
      this.isLoading = true;
      if (this.name !== null && this.email !== null && this.enquiry !== null) {
        try {
          await this.$store.dispatch("sendEnquiry", {
            name: this.name,
            email: this.email,
            enquiry: this.enquiry,
          });
          this.isLoading = false;
          this.submitted = true;
          this.enquiry = null;
          setTimeout(() => (this.submitted = false), 2000);
        } catch (err) {
          console.log(err);
          this.error =
            err.message ||
            "Something went wrong! Could not submit form. Try again later";
        }
      } else {
        this.isLoading = false;
        this.error = "Contact form cannot be blank";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<template>
  <div class="vld-parent">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal
      :show="!!error"
      title="Error!"
      :content="error"
      @close="handleError"
    >
    </base-modal>
    <div class="mx-auto m-5" style="width: 50vw">
      <div class="mx-auto">
        <h1 class="display-4 my-5">Log into your account</h1>
      </div>
      <form action="" class="fw-bold" @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="" class="form-label">Email Address</label>
          <input
            class="form-control"
            type="email"
            name="email"
            v-model.trim="email"
          />
        </div>
        <div class="mb-4">
          <label for="" class="form-label">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            v-model="password"
          />
        </div>
        <button class="btn btn-danger">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
      fullPage: true,
    };
  },
  methods: {
    async submitLogin() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.$router.replace({
          name: "user",
          params: { id: this.$store.state.auth.userId },
        });
      } catch (err) {
        console.dir(err);
        this.error = err.message || err.response.data.error.message;
        this.isLoading = false;
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

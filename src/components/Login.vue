<template>
  <div class="vld-parent">
    <Loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true">
    </Loading>
    <base-modal :show="!!error" title="Error!" @close="handleError">
      <p>{{ error }}</p>
    </base-modal>
    <div class="sign-up">
      <div class="mx-auto">
        <h1 class="display-4 my-5">Log into your account</h1>
      </div>
      <form action="" class="" @submit.prevent="submitLogin">
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
        <button class="btn btn-outline-danger">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Login",
  components: { Loading },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
      fullPage: true,
    };
  },
  computed: {},
  props: {},
  methods: {
    goToCreateProfile() {
      //   this.$router.push("/rprofile");
    },
    async submitLogin() {
      //   if(this.username == "" ||
      // this.email == "" ||
      // this.password == "" ||
      // this.confirmPassword == ""

      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.$router.replace("/user");
      } catch (err) {
        this.error = err.message || "Check your Login Details!";
        this.isLoading = false;
        console.log(err);
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .form-control:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
} */
</style>

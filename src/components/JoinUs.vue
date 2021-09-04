// https://github.com/ankurk91/vue-loading-overlay/tree/v3.x
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
      <p>{{ error }}</p>
    </base-modal>
    <div class="sign-up">
      <div class="mx-auto ">
        <h1 class="display-4 my-5">Get started with your account</h1>
      </div>
      <form action="" class="" @submit.prevent="submitBasic">
        <div class="mb-4">
          <label for="" class="form-label font-weight-bold">Username</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger': usernameValidity === 'invalid',
              'form-control:focus': usernameValidity === 'valid',
            }"
            name="username"
            type="text"
            v-model.trim="username"
            @blur="validateUsername"
          />
          <p class="text-danger" v-if="usernameValidity === 'invalid'">
            Username needs to be more than 1 character long!
          </p>
        </div>
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
        <div class="mb-4">
          <label for="" class="form-label">Confirm Password</label>
          <input
            class="form-control"
            type="password"
            name="confirmPassword"
            v-model="confirmPassword"
          />
        </div>
        <button class="btn btn-outline-danger">
          Get Started!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "JoinUs",
  components: {
    Loading,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      usernameValidity: "pending",
      isFormValid: false,
      isLoading: false,
      error: null,
      fullPage: true,
      id: this.$route.params.id,
    };
  },
  computed: {},
  methods: {
    checkInputsValid() {
      if (
        this.username.length > 6 &&
        this.email.includes("@") &&
        this.password.length > 6 &&
        this.password === this.confirmPassword
      ) {
        this.isFormValid = true;
      }
      this.isFormValid = false;
    },
    validateUsername() {
      if (this.username === "") {
        this.usernameValidity = "invalid";
      } else {
        this.usernameValidity = "valid";
      }
    },
    async submitBasic() {
      this.isLoading = true;
      if (
        this.username.length > 6 &&
        this.email.includes("@") &&
        this.password.length > 6 &&
        this.password === this.confirmPassword
      ) {
        try {
          await this.$store.dispatch("signup", {
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
          });

          this.isLoading = false;
          console.log(this.$store);
          let id = this.$store.state.auth.userId;
          this.$router.replace("/create-profile/" + id);
        } catch (err) {
          this.isLoading = false;
          this.error = err.message || "Please fill up all the inputs";
        }
      } else {
        this.isLoading = false;
        this.error = "Your form input does not meet the requirements";
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

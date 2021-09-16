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
            }"
            name="username"
            type="text"
            v-model.trim="username"
            @blur="validateUsername"
          />
          <p class="text-danger" v-if="usernameValidity === 'invalid'">
            Username needs to be more than 6 characters long!
          </p>
        </div>
        <div class="mb-4">
          <label for="" class="form-label">Email Address</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger': emailValidity === 'invalid',
            }"
            name="email"
            v-model.trim="email"
            @blur="validateEmailAddress"
          />
          <p class="text-danger" v-if="emailValidity === 'invalid'">
            Email is not valid!
          </p>
        </div>
        <div class="mb-4">
          <label for="" class="form-label">Password</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger':
                passwordValidity === 'invalid' ||
                confirmPasswordValidity === 'invalid',
            }"
            name="password"
            type="password"
            v-model="password"
            @blur="validatePassword"
          />
          <span class="text-danger" v-if="passwordValidity === 'invalid'">
            Password is not valid!
          </span>
          <span
            class="text-danger"
            v-if="confirmPasswordValidity === 'invalid'"
          >
            Passwords do not match!
          </span>
        </div>
        <div class="mb-4">
          <label for="" class="form-label">Confirm Password</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger':
                confirmPasswordValidity === 'invalid' ||
                passwordValidity === 'invalid',
            }"
            name="confirmPassword"
            type="password"
            v-model="confirmPassword"
            @blur="validateConfirmPassword"
          />
          <span class="text-danger" v-if="passwordValidity === 'invalid'">
            Password is not valid!
          </span>
          <span
            class="text-danger"
            v-if="confirmPasswordValidity === 'invalid'"
          >
            Passwords do not match!
          </span>
        </div>
        <button class="btn btn-outline-danger mb-5">
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
      emailValidity: "pending",
      passwordValidity: "pending",
      confirmPasswordValidity: "pending",
      isLoading: false,
      error: null,
      fullPage: true,
      id: this.$route.params.id,
    };
  },
  watch: {},
  computed: {},
  methods: {
    validateUsername() {
      if (this.username.length > 2) {
        this.usernameValidity = "valid";
      } else {
        this.usernameValidity = "invalid";
      }
    },
    validateEmailAddress() {
      if (this.email.includes("@")) {
        this.emailValidity = "valid";
      } else {
        this.emailValidity = "invalid";
      }
    },
    validatePassword() {
      if (this.password.length > 4) {
        this.passwordValidity = "valid";
      } else {
        this.passwordValidity = "invalid";
      }
    },
    validateConfirmPassword() {
      if (this.password === this.confirmPassword) {
        this.confirmPasswordValidity = "valid";
      } else {
        this.confirmPasswordValidity = "invalid";
      }
    },
    async submitBasic() {
      this.isLoading = true;
      if (
        this.usernameValidity === "valid" &&
        this.emailValidity === "valid" &&
        this.passwordValidity === "valid" &&
        this.confirmPasswordValidity === "valid"
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
          this.$router.push("/user/profile-form/" + id);
        } catch (err) {
          this.error = err.response.data.message;
          this.isLoading = false;
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

// https://github.com/ankurk91/vue-loading-overlay/tree/v3.x
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
      <p>{{ error }}</p>
    </base-modal>
    <div class="mx-auto m-5" style="width: 50vw">
      <div class="mx-auto ">
        <h1 class="display-4 my-5">Get started with your account</h1>
      </div>
      <form action="" class="fw-bold" @submit.prevent="submitBasic">
        <div class="mb-4">
          <label for="" class="form-label">Username</label>
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
        <button class="btn btn-danger mb-5">
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
      id: this.$route.params.id,
    };
  },
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
      // check if form input meets requirments, if so submit form
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
          let id = this.$store.state.auth.userId;
          this.$router.push("/user/profile-form/" + id);
        } catch (err) {
            console.dir(err);
        this.error =
          err.response === undefined
            ? err.message
            : err.response.data.error.message;
        }
      } else {
        this.error = "Your form input does not meet the requirements";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>


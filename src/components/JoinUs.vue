<template>
  <div class="sign-up">
    <div class="mx-auto">
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
</template>

<script>
export default {
  name: "JoinUs",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      usernameValidity: "pending",
      mode: "login",
    };
  },
  computed: {},
  props: {},
  methods: {
    goToCreateProfile() {
      this.$router.push("/create-profile");
    },
    validateUsername() {
      if (this.username === "") {
        this.usernameValidity = "invalid";
      } else {
        this.usernameValidity = "valid";
      }
    },
    validateEmail() {},
    submitBasic() {
      //   if(this.username == "" ||
      // this.email == "" ||
      // this.password == "" ||
      // this.confirmPassword == ""
      if (this.mode === "login") {
        this.$store.dispatch("signup", {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
      }
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

<template>
  <div class="">
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
    <base-confirm
      :show="deleteClick"
      content="Confirm Delete?"
      @confirm="deleteAccount"
      @cancel="deleteClick = false"
    >
    </base-confirm>
    <div
      v-if="alert === true"
      class="alert alert-success alert-box"
      role="alert"
    >
      Your password has been updated!
    </div>
    <div class="sign-up">
      <h1 class="display-3 m-5">My Account</h1>
      <form action="" class="" @submit.prevent="submitBasic">
        <div class="mb-4">
          <label for="" class="form-label fs-3 fw-bold">Username</label>
          <p class="lead">{{ getUsername }}</p>
        </div>
        <div class="mb-5">
          <label for="" class="form-label fs-3 fw-bold">Email Address</label>
          <p class="lead">{{ getEmail }}</p>
        </div>
        <div class="mb-4" v-if="isAccountUpdated">
          <label for="" class="form-label">Current Password</label>
          <input
            class="form-control"
            type="password"
            v-model="currentPassword"
          />
        </div>
        <div class="mb-4" v-if="isAccountUpdated">
          <label for="" class="form-label">New Password</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger':
                passwordValidity === 'invalid' ||
                confirmPasswordValidity === 'invalid',
            }"
            name="password"
            type="password"
            v-model="newPassword"
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
        <div class="mb-5" v-if="isAccountUpdated">
          <label for="" class="form-label">Confirm New Password</label>
          <input
            class="form-control"
            :class="{
              'border border-3 border-danger':
                confirmPasswordValidity === 'invalid' ||
                passwordValidity === 'invalid',
            }"
            name="confirmPassword"
            type="password"
            v-model="confirmNewPassword"
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
        <div class="">
          <button
            class="btn btn-danger mb-5 me-5"
            @click.prevent="updateAccount"
          >
            {{ isAccountUpdated ? "Submit New Password" : "Update Password" }}
          </button>
          <button
            class="btn btn-danger mb-5"
            @click.prevent="deleteClick = true"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Account",
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      passwordValidity: "pending",
      confirmPasswordValidity: "pending",
      isAccountUpdated: false,
      alert: false,
      deleteClick: false,
    };
  },
  computed: {
    getUsername() {
      return this.$store.getters.username;
    },
    getEmail() {
      return this.$store.getters.email;
    },
  },
  watch: {
    alert() {
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
  methods: {
    async updateAccount() {
      this.isLoading = true;
      try {
        if (this.isAccountUpdated === true) {
          await this.$store.dispatch("updatePassword", {
            currentPassword: this.currentPassword,
            password: this.newPassword,
            confirmPassword: this.confirmNewPassword,
          });
          this.currentPassword = "";
          this.newPassword = "";
          this.confirmNewPassword = "";
          this.alert = true;
          this.isAccountUpdated = false;
        } else {
          this.isAccountUpdated = true;
        }
      } catch (err) {
        console.dir(err);
        this.error =
          err.response === undefined
            ? err.message
            : err.response.data.error.message;
      }
      this.isLoading = false;
    },

    validatePassword() {
      if (this.newPassword.length > 4) {
        this.passwordValidity = "valid";
      } else {
        this.passwordValidity = "invalid";
      }
    },
    validateConfirmPassword() {
      if (this.newPassword === this.confirmNewPassword) {
        this.confirmPasswordValidity = "valid";
      } else {
        this.confirmPasswordValidity = "invalid";
      }
    },
    async deleteAccount() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("deleteUser");
        await this.$store.dispatch("logOut");
        this.deleteClick = false;
        this.$router.replace("/");
      } catch (err) {
        console.dir(err);
        this.error =
          err.response === undefined
            ? err.message
            : err.response.data.error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

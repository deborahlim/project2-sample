<template>
  <div class="sign-up">
    <div class="mx-auto">
      <h1 class="display-4 my-5">Get started with your account</h1>
    </div>
    <form action="" class="">
      <div class="mb-4">
        <label for="" class="form-label font-weight-bold">Username</label>
        <input class="form-control" type="text" />
      </div>
      <div class="mb-4">
        <label for="" class="form-label">Email Address</label>
        <input class="form-control" type="email" />
      </div>
      <div class="mb-4">
        <label for="" class="form-label">Password</label>
        <input class="form-control" type="password" />
      </div>
      <div class="mb-4">
        <label for="" class="form-label">Confirm Password</label>
        <input class="form-control" type="password" />
      </div>
    </form>
    <button class="btn btn-outline-danger" @click="clickProfileBtn" >
      Get Started!
    </button>
  </div>
</template>

<script>
export default {
  name: "JoinUs",
  props: {},
  methods: {
    clickProfileBtn() {
      this.$emit("create-profile-btn-click");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up {
  position: absolute;
  height: 100%;
  width: 50%;
  transform: translateX(50%);
}
</style>

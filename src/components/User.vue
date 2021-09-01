<template>
  <div class="container-fluid">
    <h1>Your Matches</h1>
    <div class="row m-4">
      <div class="col-sm-4 mb-4 " v-for="profile in profiles" :key="profile">
        <div class="card">
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              {{ id }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <h1>Your Groups</h1>
    <!-- <li class="">v-for="el in profile" :key="el">{{ el }}</li> -->
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      id: this.$route.params.id,
      profiles: {
        username: "Deb",
        gender: "female",
        interest: "sailing",
        test: "test1",
      },
    };
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },
};
</script>

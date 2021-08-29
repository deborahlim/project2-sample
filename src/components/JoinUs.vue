<template>
  <div class="container-fluid mx-5">
    <div class="text-primary mx-auto">
      <h1 class="">Join Special Connections</h1>
      <p>
        Create your profile today!
      </p>
    </div>
    <form action="POST" class="mx-auto" style="width: 50vw">
      <div class="mb-3">
        <label for="" class="form-label">Username</label>
        <input class="form-control" type="text" placeholder="Enter username" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Email Address</label>
        <input
          class="form-control"
          type="email"
          placeholder="Enter email address"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Password</label>
        <input
          class="form-control"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Confirm Password</label>
        <input
          class="form-control"
          type="password"
          placeholder="Confirm your password"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input class="form-control" type="text" placeholder="Enter your Name" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Age</label>
        <input class="form-control" type="date" placeholder="Enter your Age" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Gender</label>
        <select name="gender" class="form-control">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Country</label>
        <select name="country" class="form-control">
          <option value=""></option>
        </select>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">City</label>
        <input class="form-control" type="text" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Interested In</label>
        <div class="">
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="friends"
              class="form-check-input me-1"
              id="friends"
            />
            <label for="friends" class="form-label">Friendships</label>
          </div>
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="dating"
              class="form-check-input me-1"
              id="dating"
            />
            <label for="dating" class="form-label">Dating</label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Gender Preference</label>
        <div class="">
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="male"
              class="form-check-input me-1"
              id="p-male"
            />
            <label for="p-male" class="form-label">Male</label>
          </div>
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="female"
              class="form-check-input me-1"
              id="p-female"
            />
            <label for="p-female" class="form-label">Female</label>
          </div>
        </div>
      </div>
      <div class="">
        <label for="" class="form-label">Disability</label>
        <div class="">
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="physical"
              class="form-check-input me-1"
              id="physical"
            />
            <label for="physical" class="form-label">Physical</label>
          </div>
          <div class="form-check-inline">
            <input
              type="checkbox"
              value="mental"
              class="form-check-input me-1"
              id="mental"
            />
            <label for="mental" class="form-label">Mental</label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Other Disability</label>
        <input class="form-control" type="textarea" />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "JoinUs",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

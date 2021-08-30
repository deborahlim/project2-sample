<template>
  <div class="sign-up">
    <div class="mx-auto text-center">
      <h1 class="display-3 m-3">Get started with your account</h1>
    </div>
    <form action="POST" class="">
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
      <div class="mb-4">
        <label for="" class="form-label">Date of Birth</label>
        <input class="form-control" type="date" />
      </div>
      <div class="mb-4">
        <label for="" class="form-label">Gender</label>
        <select name="gender" class="form-control">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Country</label>
        <input
          class="form-control"
          list="countryOptions"
          id="countryList"
          placeholder="Type to select country"
        />
        <datalist id="countryOptions">
          <option value="Singapore" />
          <option value="Malaysia" />
        </datalist>
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
  name: "CreateProfile",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up {
  width: 50%;
  transform: translateX(50%);
}
</style>

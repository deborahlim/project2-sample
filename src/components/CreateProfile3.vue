<template>
  <div class="sign-up">
    <div class="mx-auto text-center">
      <h1 class="display-7 m-3">Create your profile</h1>
      <p class="lead">Step 3 of 3: Tell us more about yourself</p>
    </div>
    <form class="">
      <div class="mb-3">
        <label for="" class="form-label">About Me</label>
        <textarea
          class="form-control"
          type="textarea"
          placeholder="Write about yourself (Maximum)"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Hobbies and Interests</label>
        <select class="selectpicker" size="3" multiple name="" id="">
          <option value="Reading">Reading</option>
          <option value="Television">Television</option>
          <option value="Swimming">Swimming</option>
          <option value="Music">Music</option>
          <option value="Cooking">Cooking</option>
          <option value="Gardening">Gardening </option
          ><option value="Writing">Writing </option
          ><option value="Dancing">Dancing </option
          ><option value="Knitting">Knitting </option
          ><option value="Photography">Photography</option>
          <option value="Videography">Videography</option>
          <option value="Exercising">Exercising</option>
          <option value="Fishing">Fishing</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Dealbreakers</label>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Upload Photo</label>
      </div>
    </form>
    <button class="btn btn-outline-danger" @click="clickBackToProfile2Btn">
      Back
    </button>
    <button class="btn btn-outline-danger">Finish</button>
  </div>
</template>

<script>
export default {
  name: "CreateProfile",
  data() {
    return {
      n: 18,
    };
  },
  props: {},
  methods: {
    clickBackToProfile2Btn() {
      this.$emit("back-to-profile2-btn-click");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up {
  width: 50%;
  transform: translateX(50%);
}
</style>

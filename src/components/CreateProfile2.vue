<template>
  <div>
    <div class="mx-auto text-center">
      <p class="lead">Step 2 of 3: Tell us about your preferences</p>
    </div>
    <form class="">
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
        <label for="" class="form-label">Seeking a</label>
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
      <div class="mb-3">
        <label for="">Age Range</label>
        <select>
          <option value="0">18</option>
          <option :value="n + 18" v-for="n in 82" :key="n">{{ n + 18 }}</option>
        </select>
        -
        <select>
          <option value="0">100</option>
          <option :value="n + 18" v-for="n in 82" :key="n">{{ n + 18 }}</option>
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
        <label for="" class="form-label">Disability</label>
        <input
          class="form-control"
          list="disabilityOptions"
          id="disabilityList"
          placeholder="Type to select disability"
        />
        <datalist id="disabilityOptions">
          <option value="Open To All Disabilities" />
           <option value="No Disabilities" />
          <option value="Vision Impairment" />
          <option value="Deafness or Hardness of Hearing" />
          <option value="Intellectual Disability" />
          <option value="Mental Health Conditions" />
          <option value="Acquired Brain Injury" />
          <option value="Autism Spectrum Disorder" />
          <option value="Physical Disability" />
        </datalist>
      </div>
       <div class="mb-3">
        <label for="" class="form-label">Other Disability</label>
        <textarea
          class="form-control"
          type="textarea"
          placeholder="Your preferred disability does not fall into the above categories"
        ></textarea>
      </div>
    </form>
    <button class="btn btn-outline-danger" @click="clickBackToProfile1Btn">
      Back
    </button>
    <button class="btn btn-outline-danger" @click="clickProfile3">Next</button>
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
    clickBackToProfile1Btn() {
      this.$emit("back-to-profile1-btn-click");
    },
    clickProfile3() {
      this.$emit("create-profile3-btn-click");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

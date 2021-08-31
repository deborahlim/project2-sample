<template>
  <div>
    <div class="mx-auto text-center">
      <p class="lead">Step 1 of 3: Tell us about yourself</p>
    </div>
    <form class="">
      <div class="mb-4">
        <label for="" class="form-label">Date of Birth</label>
        <input class="form-control" type="date" name="dob"/>
      </div>
      <div class="mb-4">
        <label for="" class="form-label">Gender</label>
        <select name="gender" class="form-control">
          <option value="">Please Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </select>
      </div>
      <div class="mb-4">
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

      <div class="mb-4">
        <label for="" class="form-label">Disability</label>
        <input
          class="form-control"
          list="disabilityOptions"
          id="disabilityList"
          placeholder="Type to select disability"
        />
        <datalist id="disabilityOptions">
          <option value="Vision Impairment" />
          <option value="Deafness or Hardness of Hearing" />
          <option value="Intellectual Disability" />
          <option value="Mental Health Conditions" />
          <option value="Acquired Brain Injury" />
          <option value="Autism Spectrum Disorder" />
          <option value="Physical Disability" />
          <option value="Positive about Disability" />
        </datalist>
      </div>

      <div class="mb-4">
        <label for="" class="form-label">Other Disability</label>
        <textarea
          class="form-control"
          type="textarea"
          placeholder="Your disability does not fall into any of the above categories"
        ></textarea>
      </div>
    </form>
    <button class="btn btn-outline-danger" @click="clickProfile2">Next</button>
  </div>
</template>

<script>
export default {
  name: "CreateProfile",
  data() {
    return {

    }
  },
  props: {},
  methods: {
    clickProfile2() {
      this.$emit("create-profile2-btn-click");
    },
  },
};
</script>



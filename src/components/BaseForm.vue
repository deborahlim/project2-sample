<template>
  <div class="sign-up">
          <h1 class="display-7 m-3">Create your profile</h1>
    <CreateProfile1
      v-if="form == 'createProfile1'"
      @create-profile2-btn-click="setForm('createProfile2')"
    />
    <CreateProfile2
      v-if="form == 'createProfile2'"
      @back-to-profile1-btn-click="setForm('createProfile1')"
      @create-profile3-btn-click="setForm('createProfile3')"
    />
    <CreateProfile3
      v-if="form == 'createProfile3'"
      @back-to-profile2-btn-click="setForm('createProfile2')"
    />
  </div>
</template>

<script>
import CreateProfile1 from "./CreateProfile1.vue";
import CreateProfile2 from "./CreateProfile2.vue";
import CreateProfile3 from "./CreateProfile3.vue";

export default {
  name: "BaseForm",
  components: {
    CreateProfile1,
    CreateProfile2,
    CreateProfile3,
  },
  data() {
    return {
      form: "createProfile1",
    };
  },
  props: {},
  computed: {},
  methods: {
    setForm(form) {
      this.form = form;
    },
  },
};
</script>

<style scoped>

</style>

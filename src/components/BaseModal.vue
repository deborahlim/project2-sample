<template>
  <div v-if="show" class="modal-backdrop">
    <div v-if="show" class="modal-dialog">
      <div class="modal-content">
        <slot name="header">
          <h1 class="modal-title">
            {{ title }}
          </h1>
        </slot>
        <slot name="body">
          <div class="modal-body">
            <h2>{{ content }}</h2>
          </div>
        </slot>
        <slot name="footer">
          <div class="modal-footer">
            <button class="btn btn-sm btn-dark" @click="closeError">
              close
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  methods: {
    closeError() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
}
</style>

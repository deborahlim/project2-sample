<template>
  <div class="d-flex flex-column">
    <h1 class="text-start m-3">{{ this.username }}</h1>
    <div class="messages">
      <div
        v-for="message in messages"
        :key="message.id"
        class="d-flex
          flex-column
          align-items-end
          m-3"
        :class="{ 'align-items-start': message.fromSelf }"
      >
        <div
          :class="{ 'alert alert-danger': message.fromSelf }"
          class="alert alert-primary "
        >
          <span class="fw-bold"
            >{{ message.fromSelf ? "(yourself)" : message.from }} :</span
          >
          {{ message.input }}
        </div>
      </div>
    </div>

    <div class="input-group position-absolute bottom-0">
      <input
        v-model="input"
        type="text"
        class="form-control"
        placeholder="Send Message"
        aria-label="Send Message"
      />
      <button
        class="btn btn-secondary"
        @click.prevent="sendMessage"
        type="button"
      >
        Send
      </button>
    </div>
  </div>
</template>
<script>
import socket from "./../../socket";
export default {
  name: "Chats",

  data() {
    return {
      input: "",
      selectedChat: this.username,
      chats: [],
      messages: [],
    };
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.auth.username;
    },
    prevRoutePath() {
      return this.prevRoute ? this.prevRoute.path : "/";
    },
  },
  props: ["id", "username"],
  methods: {
    sendMessage() {
      socket.emit("private message", {
        input: this.input,
        to: this.username,
        from: this.getCurrentUser,
      });
      this.messages.push({
        input: this.input,
        to: this.username,
        fromSelf: true,
      });
      this.input = "";
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },

  created() {
    socket.emit("join", `${this.getCurrentUser}--with--${this.username}`);
    socket.on("connect_error", (err) => {
      if (err.message === "invalid id") {
        close(
          socket.on("error", (err) => {
            console.log(err);
          })
        );
      }
    });

    socket.on("receive message", ({ input, to, from, fromSelf }) => {
      this.messages.push({ input, to, from, fromSelf });
    });
  },
  destroyed() {
    socket.disconnect();
    console.log("destroyed");
  },
};
</script>

<style>
.messages {
  height: 77vh;
}

.alert {
  display: inline-block;
}
</style>

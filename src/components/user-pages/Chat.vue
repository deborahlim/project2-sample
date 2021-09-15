<template>
  <div class="">
    <h1 class="text-start m-3">{{ username }}</h1>
    <p v-for="message in messages" :key="message.id" class="">
      {{ message.fromSelf ? "(yourself)" : message.from }} : {{ message.input }}
    </p>
    <form @submit.prevent="onSubmit">
      <textarea
        v-model="input"
        placeholder="Your message..."
        class="input form-control"
      />
      <button class="btn btn-primary" @click.prevent="sendMessage">Send</button>
    </form>
  </div></template
>

<script>
import socket from "./../../socket";
export default {
  data() {
    return {
      input: "",
      messages: [],
    };
  },
  props: ["id", "username"],
  computed: {
    getCurrentUser() {
      return this.$store.state.auth.username;
    },
  },
  methods: {
    sendMessage() {
      socket.emit("private message", {
        input: this.input,
        to: this.id,
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
  created() {
    socket.connect();
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

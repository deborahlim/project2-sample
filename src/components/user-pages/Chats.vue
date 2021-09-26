<template>
  <div class="d-flex flex-column flex-grow-1">
    <h1 class="text-start m-3">{{ this.username }}</h1>
    <div class="messages flex-grow-1">
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
            >{{ message.fromSelf ? "(yourself)" : username }} :</span
          >
          {{ message.input }}
        </div>
      </div>
    </div>

    <div class="ms-auto input-group">
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
const customAxios = require("./../../utils/customAxios");
export default {
  name: "Chats",

  data() {
    return {
      input: "",
      messages: [],
      updatedRoomName: "",
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
    formatMessages() {
      for (let message of this.messages) {
        if (message.from === this.getCurrentUser) {
          message.fromSelf = true;
        } else {
          message.fromSelf = false;
        }
      }
    },
    async sendMessage() {
      let message = {
        input: this.input,
        from: this.getCurrentUser,
        to: this.username,
      };
      await customAxios.patch("chats", {
        room: this.updatedRoomName,
        message: message,
      });
      socket.emit("private message", message);
      this.messages.push(message);
      this.formatMessages();
      this.input = "";
    },
  },

  async created() {
    socket.connect();
    socket.emit("join", `${this.getCurrentUser}--with--${this.username}`);
    socket.on("joined", async (updatedRoomName) => {
      this.updatedRoomName = updatedRoomName;
      let result = await customAxios.get("chats", {
        params: { room: updatedRoomName },
      });

      if (!result.data) {
        await customAxios.post("chats", {
          room: updatedRoomName,
          messages: [],
        });
        console.log(result);
      } else {
        for (let message of result.data.messages) {
          this.messages.push(message);
        }
        this.formatMessages();
      }
    });
    socket.on("connect_error", (err) => {
      if (err.message === "invalid id") {
        close(
          socket.on("error", (err) => {
            console.log(err);
          })
        );
      }
    });

    socket.on("receive message", async ({ input, to, from }) => {
      this.messages.push({ input, to, from });
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
  background-color: #d6cbcb;
}

.alert {
  display: inline-block;
}
</style>

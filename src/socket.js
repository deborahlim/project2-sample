import { io } from "socket.io-client";

const URL = "https://3000-rose-firefly-hc1qbkah.ws-us17.gitpod.io/";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;

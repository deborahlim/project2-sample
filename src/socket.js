import { io } from "socket.io-client";

const URL = "https://dlhy-tgc-special-connections.herokuapp.com/";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;

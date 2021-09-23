import { io } from "socket.io-client";

const URL = "https://3000-brown-viper-dk87gdu8.ws-us17.gitpod.io/";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;

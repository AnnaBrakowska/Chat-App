//connection listening for data and sending data
const socket = io();
//arrow functions would work in chrome but may crush on the phone
socket.on("connect", function() {
  console.log("Connected to server");
});

socket.on("newMessage", function(message) {
  console.log("New message ", message);
});

socket.emit("createMessage", {
  from: "Client",
  text: "Hello",
  createdAt: new Date(Date.now())
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

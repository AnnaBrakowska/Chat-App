//connection listening for data and sending data
const socket = io();
//arrow functions would work in chrome but may crush on the phone
socket.on("connect", function() {
  console.log("Connected to server");
});

socket.on("newMessage", function(message) {
  console.log("New message ", message);
});

document.querySelector("#send").addEventListener("click", function() {
  console.log("Hello");
  function getMessage() {
    let from = document.querySelector("#from").value;
    let text = document.querySelector("#text").value;
    let message = {
      from: from,
      text: text,
      createdAt: new Date(Date.now())
    };
    console.log(from, text, message);
    socket.emit("createMessage", message);
  }
  getMessage();
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

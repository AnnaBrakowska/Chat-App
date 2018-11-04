const express = require("express");
const PORT = process.env.PORT || 8000;
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
const publicPath = path.join(__dirname, "../public");
const app = express();

const server = http.createServer(app);

//socket server emmiting or listening to events merged with app server
const io = socketIO(server);

app.use(express.static(publicPath));

//listen for all connections and disconnections
io.on("connection", socket => {
  console.log("New user connected");

  //socket.on emits to one connection
  //io.emit emmits to all connections
  socket.on("createMessage", newMessage => {
    console.log(newMessage);
    io.emit("newMessage", {
      from: newMessage.from,
      test: newMessage.text,
      createdAt: newMessage.createdAt
    });
  });

  //single connection
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, function() {
  console.log("Listening to port " + PORT);
});

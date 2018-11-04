const express = require("express");
const PORT = process.env.PORT || 8000;
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
const publicPath = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);

//emmiting or listening to events
const io = socketIO(server);

app.use(express.static(publicPath));

//listen for all connections and disconnections
io.on("connection", socket => {
  console.log("New user connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, function() {
  console.log("Listening to port " + PORT);
});

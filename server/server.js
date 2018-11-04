const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
/*** Serving static files***/
const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(process.env.PORT, function() {
  console.log("Listening to port" + PORT);
});

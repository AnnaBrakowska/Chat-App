const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
/*** Serving static files***/
const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

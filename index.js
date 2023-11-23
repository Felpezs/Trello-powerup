const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors({ origin: "https://trello.com" }));
app.use("/", express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Started server!");
});

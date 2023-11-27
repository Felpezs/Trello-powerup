const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

app.use(cors({ origin: "https://trello.com" }));
app.use("/", express.static(__dirname + "/public"));

router.post("/auth", (request, response) => {
  response.send({
    token: "198374638a1caca81e1827376460201982baed5155e6c4934784625fa52372f",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);

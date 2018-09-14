const express = require("express"),
  app = express(),
  port = 3001,
  axios = require('axios'),
  bodyParser = require("body-parser");

app.use(bodyParser.json())
const cc = require("./character_controller")

app.get("/api/characters", cc.getCharacters)


app.listen(port, () =>
  console.log(`We're gonna need a bigger boat... ${port}`)
);

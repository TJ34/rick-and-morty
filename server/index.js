const express = require("express"),
  app = express(),
  port = 3001,
  axios = require('axios'),
  bodyParser = require("body-parser");

app.use(bodyParser.json())
const cc = require("./character_controller")

app.get("/api/characters", cc.getCharacters);
app.post("/api/favorites", cc.addToFavorites);
app.get("/api/favorites", cc.favoriteArr);
app.delete("/api/favorites/:id", cc.deleteFavorite);
app.put("/api/favorites/:id", cc.updateComment)


app.listen(port, () =>
  console.log(`We're gonna need a bigger boat... ${port}`)
);

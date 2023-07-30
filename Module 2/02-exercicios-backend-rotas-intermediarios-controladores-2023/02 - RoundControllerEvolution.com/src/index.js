const express = require("express");
const app     = express();

const ctrl = require("./controllers/roundController");

const port = 8_000;
//===================================================================

app.get("/", ctrl.nextPlayer);
app.get("/remove", ctrl.removePlayer);
app.get("/add", ctrl.addPlayer)
//===================================================================

app.listen(port, () => console.log(`\nListening on Port: ${port}`))

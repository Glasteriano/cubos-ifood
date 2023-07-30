const express = require("express");
const app = express();

const router = require("./routers/pokemonRouter")

const port = 8_000;
//===================================================================

app.use(express.json());
app.use(router);
//===================================================================

app.listen(port, () => console.log(`Listening on Port: ${port}\n`))
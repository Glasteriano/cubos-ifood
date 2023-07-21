const express = require("express");
const app = express();

const {showAll, getProperty} = require("./controllers/propertyController");

const port = 8_000;
//===================================================================

app.get("/properties", showAll);
app.get("/properties/:id", getProperty);
//===================================================================

app.listen(port, () => console.log(`Listening on Port: ${port}\n`));

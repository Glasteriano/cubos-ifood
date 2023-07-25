const router = require("./routers")

const express = require("express");
const app = express();

const port = 3_000;
//=========================================================

app.use(express.json());  // middleware that accepts only JSON format

app.use(router);  // import the routers needed for the application in another file
//=========================================================

app.listen(port, () => console.log(`Listening on port: ${port}\n`));

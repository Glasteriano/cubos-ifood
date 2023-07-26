const express = require("express")
const app = express();

const router = require("../src/routers/router")

const port = 3_000;
//===================================================================

app.use(express.json());

app.use(router);
//===================================================================

app.listen(port, () => console.log(`Listrening on port: ${port}\n`))
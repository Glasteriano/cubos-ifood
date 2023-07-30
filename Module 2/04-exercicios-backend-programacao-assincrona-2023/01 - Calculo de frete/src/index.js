const express = require("express");
const app = express();

const router = require("./routers/shippingRouter");

const port = 3_000;
//=========================================================

app.use(express.json());
app.use(router);
//=========================================================

app.listen(port, () => console.log(`Listening on Port: ${port}\n`));
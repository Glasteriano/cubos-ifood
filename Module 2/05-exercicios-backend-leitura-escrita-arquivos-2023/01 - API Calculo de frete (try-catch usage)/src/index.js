const express = require("express");
const app = express();

const router = require("./routers/shippingRouter");

const PORT = 3_000;
//=========================================================

app.use(express.json());
app.use(router);
//=========================================================

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}\n`));
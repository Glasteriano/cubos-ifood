const express = require("express");
const app = express();

const {initial} = require("./controllers/students")

const {validPassword} = require("./passwordMiddleware")

const port = 3_000;
//=========================================================

//---- Middleware ----//
app.use(validPassword);
//_______________________________________________

//---- Get ----//
app.get("/students", initial)
//=========================================================

app.listen(port, () => console.log(`Listening on port: ${port}\n`))
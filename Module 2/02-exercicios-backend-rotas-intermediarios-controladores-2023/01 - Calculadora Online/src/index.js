const {sum, division, multiplication, subtraction} = require("./controllers/calculation");

const express = require("express");
const app     = express();

const port = 3_000;
//=================================================================================================

app.get("/", (req, res) => {
    res.send("Welcome to my script");
});
app.get("/sum", sum);
app.get("/division", division);
app.get("/subtraction", subtraction);
app.get("/multiplication", multiplication);
//=================================================================================================

app.listen(port, () => console.log(`\nListening on Port: ${port}\n`))

const express = require("express");
const app = express();
const port = 3000;
//====================================================================

const players = ["José", "Maria", "João", "Marcos", "Fernanda"];
//====================================================================

let index = 0

app.get("/", (req, res) => {
    
    res.send(`It's time to ${players[index]} to play`);
    index++;
    
    if (index >= (players.length)){
        index = 0;
    };
});
//====================================================================

app.listen(port, () => {
console.log(`The server is listening on Port: ${port}`)
});

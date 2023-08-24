const express = require('express');
const app = express();

const router = require('./routers/routers')

const PORT = 3_000;
//====================================================

app.use(express.json());
app.use(router);
//====================================================

app.listen(PORT, () => console.log(`Listenig on Port: ${PORT}\n`));

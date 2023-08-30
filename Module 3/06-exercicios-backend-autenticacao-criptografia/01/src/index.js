import express from 'express';
const app = express();

import router from './routers/router.js';

const PORT = 3_000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}\n`));

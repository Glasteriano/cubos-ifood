import express from 'express';
import { welcome } from '../controllers/controllers.js';
import { addUser } from '../controllers/user.js';

const route = express();

route.get('/', welcome);
route.post('/users', addUser)

export default route;
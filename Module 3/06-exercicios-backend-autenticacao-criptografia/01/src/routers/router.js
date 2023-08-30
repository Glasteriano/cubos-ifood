import express from 'express';
import { welcome } from '../controllers/controllers.js';
import { addUser, loginUser } from '../controllers/user.js';

const route = express();

route.get('/', welcome);
route.post('/users', addUser)
route.post('/login', loginUser)

export default route;
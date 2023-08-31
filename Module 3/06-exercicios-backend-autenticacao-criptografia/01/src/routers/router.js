import express from 'express';
import { addUser, loginUser } from '../controllers/user.js';
import { addPokemon, listPokemons, updatePokemonNick } from '../controllers/pokemon.js';
import { verifyLoggedUser } from '../middlewares/autentication.js';

const route = express();

route.post('/users', addUser)
route.post('/login', loginUser)

route.use(verifyLoggedUser);

route.post('/pokemon/new', addPokemon)
route.patch('/pokemon/update/nickname', updatePokemonNick);
route.get('/pokemon/list', listPokemons);

export default route;
const express = require("express");
const pokemon = require("../controllers/pokemonControl");
const router = express();
//===================================================================
//===================================================================

//////////---------- Get ----------//////////
router.get("/pokemons", pokemon.showPokemon);
router.get("/pokemons/:idOrName", pokemon.getPokemon);
//===================================================================
//===================================================================

//////////---------- Exports ----------//////////
module.exports = router;
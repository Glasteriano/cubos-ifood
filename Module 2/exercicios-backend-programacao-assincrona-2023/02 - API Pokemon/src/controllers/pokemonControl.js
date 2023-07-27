const { listarPokemons, detalharPokemon } = require("utils-playground");
//===================================================================
//===================================================================

//////////---------- Get ----------//////////
async function showPokemon(req, res) {
    const { page } = req.query;

    const listOfPokemons = await listarPokemons(page);

    return res.status(200).json(listOfPokemons.results);
};
//===================================================================
//===================================================================

//////////---------- Exports ----------//////////
module.exports = {
    showPokemon
};
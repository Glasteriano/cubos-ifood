const { listarPokemons, detalharPokemon } = require("utils-playground");
//===================================================================
//===================================================================

//////////---------- Get ----------//////////
async function showPokemon(req, res) {
    const { page } = req.query;

    const listOfPokemons = await listarPokemons(page);

    return res.status(200).json(listOfPokemons.results);
};
//_________________________________________________________

async function getPokemon(req, res) {
    const { idOrName } = req.params

    const pokemon = await detalharPokemon(idOrName)

    const characterDetails = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    };

    return res.status(200).json(characterDetails)
};
//===================================================================
//===================================================================

//////////---------- Exports ----------//////////
module.exports = {
    showPokemon,
    getPokemon
};
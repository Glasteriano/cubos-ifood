import { pool } from "../database/connection.js";
import { deletePokemonById, insertPokemon, listAllPokemons, selectPokemonById, selectPokemonByUser_id, selectUserByEmail, updatePokemonNickname } from "../database/dbCommands.js";


export async function addPokemon(req, res) {
    const { name, abilities, picture, nickname } = req.body;
    const { id } = req.userData;

    if (!name || !abilities) {
        return res.status(400).json({ message: "Name and/or Abilities not given" })
    };

    try {
        const newPokemon = await pool.query(insertPokemon, [id, name, [abilities], picture, nickname]);

        return res.status(201).json(newPokemon.rows[0])

    } catch (error) {

        return res.status(500).json({ message: "Internal error" })
    };
};

export async function updatePokemonNick(req, res) {
    const { name, nickname } = req.body;
    const { id } = req.userData;

    if (!nickname) {
        return res.status(400).json({ message: "Nickname not given" });
    };

    try {
        const updatePokemon = await pool.query(updatePokemonNickname, [nickname, id, name]);
        return res.status(201).json(updatePokemon.rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Internal error" });
    };
};

export async function listPokemons(req, res) {
    const { id } = req.userData;

    try {
        const { rows: pokemons } = await pool.query(selectPokemonByUser_id, [id]);

        for (const pokemon of pokemons) {
            pokemon.abilities = pokemon.abilities.split('"')[1].split(", ");
            pokemon.owner = req.userData.name;
        };

        return res.json(pokemons);
    } catch (error) {
        return res.status(500).json({ message: "Internal error" });
    }
};

export async function listOnePokemon(req, res) {
    const { id } = req.params;

    try {
        const pokemonFound = await pool.query(selectPokemonById, [id, req.userData.id]);

        if (pokemonFound.rowCount === 0) {
            return res.status(404).json({ message: "Pokémon not found" })
        };

        const pokemon = pokemonFound.rows[0]

        pokemon.abilities = pokemon.abilities.split('"')[1].split(", ");
        pokemon.owner = req.userData.name;

        return res.json(pokemon)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal error" });
    };
};

export async function deletePokemon(req, res) {
    const { id } = req.params;

    try {
        const pokemonFound = await pool.query(selectPokemonById, [id, req.userData.id]);

        if (pokemonFound.rowCount === 0) {
            return res.status(404).json({ message: "Pokémon not found" })
        };

        await pool.query(deletePokemonById, [id])

        return res.status(204).send();

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal error" });
    };

}
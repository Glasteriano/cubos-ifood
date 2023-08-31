import { pool } from "../database/connection.js";
import { insertPokemon, listAllPokemons, selectPokemonByUser_id, selectUserByEmail, updatePokemonNickname } from "../database/dbCommands.js";


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
        console.log(error.message)
        return res.status(500).json({ message: "Internal error" });
    }
};
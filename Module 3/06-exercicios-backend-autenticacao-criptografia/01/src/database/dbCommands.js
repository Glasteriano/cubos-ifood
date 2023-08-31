export const insertUser = `
    INSERT INTO
        users (name, email, password)
    VALUES
        ($1, $2, $3)
    RETURNING
        name, email, password
`;

export const selectUserByEmail = `
    SELECT
        *
    FROM
        users
    WHERE
        email = $1;
`;

export const insertPokemon = `
    INSERT INTO
        pokemons (user_id, name, abilities, picture, nickname)
    VALUES
        ($1, $2, $3, $4, $5)
    RETURNING
        *
`;

export const updatePokemonNickname = `
    UPDATE
        pokemons
    SET
        nickname = $1
    WHERE
        user_id = $2 AND name = $3
    RETURNING
        *
`;

export const listAllPokemons = `
    SELECT
        *
    FROM
        pokemons
`;

export const selectPokemonByUser_id = `
    SELECT
        id, name, abilities, nickname, picture 
    FROM
        pokemons
    WHERE
        user_id = $1
`;

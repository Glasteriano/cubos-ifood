export const insertUser = `
    INSERT INTO
        users (name, email, password)
    VALUES
        ($1, $2, $3)
    RETURNING
        name, email, password
`;
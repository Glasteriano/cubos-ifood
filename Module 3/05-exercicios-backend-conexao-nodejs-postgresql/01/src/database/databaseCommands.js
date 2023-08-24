const insertAuthor = `
    INSERT INTO
        authors (name, age)
    VALUES
        ($1, $2)
    RETURNING
        *
`;

const selectAuthorById = `
    SELECT
        *
    FROM
        authors
    WHERE
        id = $1
`;

module.exports = {
    insertAuthor,
    selectAuthorById
};

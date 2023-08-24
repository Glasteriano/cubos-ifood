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

const insertBook = `
    INSERT INTO
        books (name, genre, publisher, publication_date, author_id)
    VALUES
        ($1, $2, $3, $4, $5)
    RETURNING
        *
`

module.exports = {
    insertAuthor,
    selectAuthorById,
    insertBook
};

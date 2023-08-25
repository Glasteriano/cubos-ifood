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
`;

const selectBookByAuthor_id = `
    SELECT
        *
    FROM
        books
    WHERE
        author_id = $1
`;

const selectBooks = `
    SELECT
        *
    FROM
        books
`

module.exports = {
    insertAuthor,
    selectAuthorById,
    insertBook,
    selectBookByAuthor_id,
    selectBooks
};

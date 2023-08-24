const insertAuthor = `
    INSERT INTO
        authors (name, age)
    VALUES
        ($1, $2)
`;
//________________________________

const selectAuthorByName = `
    SELECT
        *
    FROM
        authors
    WHERE
        name = $1
`
//===============================================

module.exports = {
    insertAuthor,
    selectAuthorByName
};

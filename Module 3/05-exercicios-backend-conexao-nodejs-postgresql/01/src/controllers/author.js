const { pool } = require('../database/conection');
const { insertAuthor, selectAuthorById, selectBookByAuthor_id } = require('../database/databaSeCommands');

async function addAuthor(req, res) {
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name not given" })
    };

    try {
        const result = await pool.query(insertAuthor, [name, age]);

        return res.status(201).json(result.rows);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

async function findAuthor(req, res) {
    const { id } = req.params;
    const books = []
    try {
        const result = await pool.query(selectAuthorById, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Author not found" });
        };

        const getBooks = await pool.query(selectBookByAuthor_id, [id]);

        for (let book of getBooks.rows) {
            const addBookInfo = {
                id: book.id,
                name: book.name,
                genre: book.genre,
                publisher: book.publisher,
                publication_date: book.publication_date
            };

            books.push(addBookInfo);
        };

        const showResult = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            age: result.rows[0].age,
            books
        };

        return res.status(200).json(showResult);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

module.exports = {
    addAuthor,
    findAuthor
};

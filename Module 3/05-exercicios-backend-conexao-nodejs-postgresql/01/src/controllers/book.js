const { pool } = require('../database/conection');
const { insertBook, selectBooks } = require('../database/databaSeCommands');

async function addBook(req, res) {
    const { name, genre, publisher, publication_date } = req.body;
    const { id } = req.params;

    if (!name) {
        return res.status(400).json({ message: "name not given" });
    };

    try {
        const result = await pool.query(insertBook, [name, genre, publisher, publication_date, id]);

        const showResult = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            genre: result.rows[0].genre,
            publisher: result.rows[0].publisher,
            publication_date: result.rows[0].publication_date
        };

        return res.status(201).json(showResult);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

async function selectAllBooks(_, res) {
    try {
        const result = await pool.query(selectBooks);

        return res.status(200).json(result.rows);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addBook,
    selectAllBooks
};
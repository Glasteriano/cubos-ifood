const { pool } = require('../database/conection');
const { insertBook } = require('../database/databaSeCommands');

async function addBook(req, res) {
    const { name, genre, publisher, publication_date } = req.body;
    const { id } = req.params;

    if (!name) {
        return res.status(400).json({ message: "name not given" });
    };

    try {
        const result = await pool.query(insertBook, [name, genre, publisher, publication_date, id]);

        return res.status(201).json(result.rows[0]);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

module.exports = {
    addBook
};
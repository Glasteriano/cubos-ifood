const { pool } = require('../database/conection');
const { insertAuthor, selectAuthorById } = require('../database/databaSeCommands');

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

    try {
        const result = await pool.query(selectAuthorById, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Author not found" });
        };

        return res.status(200).json(result.rows);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

module.exports = {
    addAuthor,
    findAuthor
};

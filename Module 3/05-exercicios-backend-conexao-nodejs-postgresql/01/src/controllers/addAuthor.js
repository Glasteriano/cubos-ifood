const { pool } = require('../database/conection');
const { insertAuthor } = require('../database/databaSeCommands');
//===============================================

async function addAuthor(req, res) {
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name not given" })
    };

    try {
        const result = await pool.query(insertAuthor, [name, age]);

        return res.status(201).json(result.rows);

    } catch (error) {
        console.log(error.message);
    };
};
//===============================================

module.exports = {
    addAuthor
};

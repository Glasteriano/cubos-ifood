import { pool } from "../database/connection.js";
import { insertUser } from "../database/dbCommands.js";
import { hash } from 'bcrypt'


export async function addUser(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are needed" })
    };

    try {
        const cryptPassword = await hash(password, 10);
        const newUser = await pool.query(insertUser, [name, email, cryptPassword]);

        return res.status(201).json(newUser.rows[0]);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal error' });
    };

};
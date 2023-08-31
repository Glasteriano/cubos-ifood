import { pool } from "../database/connection.js";
import { insertUser, selectUserByEmail } from "../database/dbCommands.js";
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { passwordJWT } from "../database/ignoreFile.js";


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

export async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        const userLogin = await pool.query(selectUserByEmail, [email]);
        const validPassword = await compare(password, userLogin.rows[0].password);

        if (userLogin.rowCount === 0) {
            return res.status(400).json({ message: "Invalid email/password" })
        };

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid email/password" })
        };

        const token = jwt.sign({ id: userLogin.rows[0].id, name: userLogin.rows[0].name }, passwordJWT, { expiresIn: '15m' })
        delete userLogin.rows[0].password;

        return res.status(200).json({ user: userLogin.rows[0], token });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal error' });
    };
};
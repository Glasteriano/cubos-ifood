import jwt from 'jsonwebtoken';
import { passwordJWT } from "../database/ignoreFile.js";

export async function verifyLoggedUser(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    };

    const token = authorization.split(" ")[1];

    try {
        const userId = jwt.verify(token, passwordJWT);

        req.userData = userId;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    };
};

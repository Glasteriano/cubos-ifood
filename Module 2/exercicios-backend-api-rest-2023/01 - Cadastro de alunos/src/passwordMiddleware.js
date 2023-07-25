// const status = require("./statusHTTP");

function validPassword(req, res, next){
    const { password } = req.query;

    if (!password){
        return res.status(401).json({"message" : "The password was not given"});
    };

    if (password !== "cubos123"){
        return res.status(401).json({"message" : "Invalid password."});
    };

    next();
};
//=========================================================

module.exports = {
    validPassword
};
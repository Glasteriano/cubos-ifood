function validPassword(req, res, next){
    const { password } = req.query;

    if (!password){
        return res.send("The password was not given!");
    };

    if (password !== "cubos123"){
        return res.send("Invalid password.");
    };

    next();
};
//=========================================================

module.exports = {
    validPassword
};
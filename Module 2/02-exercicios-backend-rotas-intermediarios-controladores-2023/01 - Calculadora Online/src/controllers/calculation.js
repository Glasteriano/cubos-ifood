function sum(req, res){
    const {num1, num2} = req.query;
    let total          = (~~num1) + (~~num2);  // ~~ convert to integer

    res.send(`${total}`);  // res.send() only accept strings, tht's why I put in string format
};
//====================================================

function subtraction(req, res){
    const {num1, num2} = req.query;
    let total          = (~~num1) - (~~num2);

    res.send(`${total}`);
};
//====================================================

function division(req, res){
    const {num1, num2} = req.query;
    let total          = (~~num1) / (~~num2);

    res.send(`${total}`);
};
//====================================================

function multiplication(req, res){
    const {num1, num2} = req.query;
    let total          = (~~num1) * (~~num2);

    res.send(`${total}`);
};
//====================================================

module.exports = {subtraction, sum, division, multiplication};

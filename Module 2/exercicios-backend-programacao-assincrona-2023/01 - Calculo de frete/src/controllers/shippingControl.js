const dataBase = require("../dataBase/productsDataBase");
//=========================================================

//////////---------- Get ----------//////////
function showProducts(_, res) {
    const products = [];

    for (let product of dataBase) {
        products.push(product.name);
    };

    res.status(200).json(products);
};
//=========================================================

module.exports = {
    showProducts
};

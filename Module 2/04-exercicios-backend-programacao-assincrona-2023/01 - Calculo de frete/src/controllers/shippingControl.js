const dataBase = require("../dataBase/productsDataBase");
const { getStateFromZipcode } = require("utils-playground");
//=========================================================
//=========================================================

//////////---------- NAME HERE ----------//////////
function getProductPrice(id) {
    // const { idProduct } = req.params;
    let productPrice = false

    for (let product of dataBase.products) {
        if (product.id === Number(id)) {
            productPrice = product.price;
        };
    };

    return productPrice;
};
//=========================================================
//=========================================================

//////////---------- Get ----------//////////
function showProducts(_, res) {
    const products = [];

    for (let product of dataBase.products) {
        products.push(product.name);
    };

    return res.status(200).json(products);
};
//_______________________________________________
//_______________________________________________

function getProduct(req, res) {
    const { idProduct } = req.params;

    for (let product of dataBase.products) {
        if (product.id === Number(idProduct)) {
            return res.status(200).json(product);
        };
    };

    return res.status(404).json({ "message": "Product not found." });
};
//_______________________________________________
//_______________________________________________


// PUT IN A SPECIFIC FOLDER AND ENHANCE THE RETURN FOR THE PRODUCT TO NOT USE ANOTER FOR LOOP AS I ALREADY HAVE THAT FUNCTION
async function freightCalc(req, res) {
    const { idProduct, zipCode } = req.params;

    let freightPrice = 0;

    const productPrice = getProductPrice(idProduct);
    const stateToShip = await getStateFromZipcode(zipCode);

    let productDetail;
    //----------------------------------------------------------

    if (productPrice && (stateToShip !== undefined)) {
        if (dataBase.statesAndPrice[stateToShip]) {
            freightPrice = productPrice * dataBase.statesAndPrice[stateToShip];
        }
        else {
            freightPrice = productPrice * dataBase.statesAndPrice.standardCalc;
        };
        //--------------------------------------------

        // TRY TO ENHANCE THAT PART
        for (let product of dataBase.products) {
            if (product.id === Number(idProduct)) {
                productDetail = product;
            };
        };
        //--------------------------------------------

        const product = {
            productDetail,
            "state": stateToShip,
            "shippingPrice": freightPrice
        };
        //--------------------------------------------

        return res.status(200).json(product);
    };
    //----------------------------------------------------------

    return res.status(404).json({ "message": "State not found." });
};
//=========================================================

//////////---------- Exports ----------//////////
module.exports = {
    showProducts,
    getProduct,
    freightCalc
};

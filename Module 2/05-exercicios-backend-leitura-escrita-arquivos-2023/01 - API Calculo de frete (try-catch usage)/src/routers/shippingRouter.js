const express = require("express");
const router = express();

const product = require("../controllers/shippingControl");
//=========================================================

//////////---------- Get ----------//////////
router.get("/products", product.showProducts);
router.get("/products/:idProduct", product.getProduct);
router.get("/products/:idProduct/shipping/:zipCode", product.freightCalc);
//=========================================================

//////////---------- Exports ----------//////////
module.exports = router;

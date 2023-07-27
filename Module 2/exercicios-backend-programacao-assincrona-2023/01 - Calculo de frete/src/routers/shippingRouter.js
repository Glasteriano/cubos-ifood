const express = require("express");
const router = express();

const product = require("../controllers/shippingControl");
//=========================================================

//////////---------- Get ----------//////////
router.get("/products", product.showProducts);
//=========================================================

module.exports = router;

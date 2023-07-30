const express = require("express");
const router = express();

const control = require("../controllers/getZipCodeControl");
//===================================================================

//////////---------- Get ----------//////////
router.get("/address", control.zipCodeMessage);
router.get("/address/:zipCode", control.getZipCode);
router.get("/address/db/show", control.showDataBase);
//===================================================================

//////////---------- Exports ----------//////////
module.exports = router;
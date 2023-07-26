const express = require("express");
const router = express();

const control = require("../controllers/guest")
//===================================================================

//////////---------- Get ----------//////////
router.get("/guests", control.showGuests)
//===================================================================

module.exports = router;
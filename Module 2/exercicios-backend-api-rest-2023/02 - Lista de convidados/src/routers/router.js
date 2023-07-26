const express = require("express");
const router = express();

const control = require("../controllers/guest")
const middleware = require("../middlewares/middleware")
//===================================================================

//////////---------- Get ----------//////////
router.get("/guests", middleware.nameQuery);  // middleware in the router to verify the query
//____________________________________________________

//////////---------- Post ----------//////////
router.post("/guests", control.addGuest);
//____________________________________________________

//////////---------- Delete ----------//////////
router.delete("/guests/:name", control.deleteGuest);
//===================================================================

module.exports = router;

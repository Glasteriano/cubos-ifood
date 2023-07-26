const express = require("express");
const router = express();

const control = require("../controllers/guest")

const middleware = require("../middlewares/middleware")
//===================================================================

//////////---------- Get ----------//////////
router.get("/guests", middleware.nameQuery);  // middleware in the router to verify the query
//===================================================================

module.exports = router;

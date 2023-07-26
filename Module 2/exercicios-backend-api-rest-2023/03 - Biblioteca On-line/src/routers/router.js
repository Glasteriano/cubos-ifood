const express = require("express");
const router = express();

const libary = require("../controllers/library");
//========================================================================
//========================================================================

//////////---------- Get ----------//////////
router.get("/books", libary.showBook);
router.get("/books/:id", libary.getBookById);

//========================================================================
//========================================================================

module.exports = router;
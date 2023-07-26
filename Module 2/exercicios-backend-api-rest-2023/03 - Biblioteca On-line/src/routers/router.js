const express = require("express");
const router = express();

const libary = require("../controllers/library");
//========================================================================
//========================================================================

//////////---------- Get ----------//////////
router.get("/books", libary.showBook);
router.get("/books/:id", libary.getBookById);

//////////---------- Post ----------//////////
router.post("/books", libary.addBook)

//////////---------- Put ----------//////////
router.put("/books/:id", libary.updateBook);

//////////---------- Patch ----------//////////
router.patch("/books/:id/title", libary.updateTitle);
router.patch("/books/:id/author", libary.updateAuthor);
router.patch("/books/:id/year", libary.updateYear);
router.patch("/books/:id/numPages", libary.updateNumPages);

//////////---------- Delete ----------//////////
router.delete("/books/:id", libary.deleteBook);

//========================================================================
//========================================================================

module.exports = router;
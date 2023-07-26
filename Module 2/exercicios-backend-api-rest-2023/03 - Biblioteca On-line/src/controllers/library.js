const dataBase = require("../dataBase/dataBase");
//========================================================================
//========================================================================

//////////---------- Validator ----------//////////
function validString(checkString){
    const clearString = checkString.trim();

    return (clearString) ? clearString : false;
};

function validNumber(checkNumber){
    const isNumber = Number(checkNumber);

    return (isNumber) ? Number(checkNumber) : false
};
//========================================================================
//========================================================================

//////////---------- Get ----------//////////
function showBook(_, res){
    return res.status(200).json(dataBase.books);
};
//____________________________________________________

function getBookById(req, res){
    const { id } = req.params;

    if (!Number(id)){
        return res.status(400).json({"message" : "The id might be a number."});
    };
    //--------------------------------------

    for (let book of dataBase.books){
        if (book.id === Number(id)){
            return res.status(200).json(book)
        };
    };
    //--------------------------------------

    return res.status(404).json({"message" : "This id does not exist!"});
};
//========================================================================
//========================================================================

//////////---------- Post ----------//////////
function addBook(req, res){
    const { title, author, year, numPages } = req.body;
    //--------------------------------------

    if (!validString(title) || !validString(author)){
        return res.status(400).json({"message" : "The title and the author might be given and not empty."});
    };
    //--------------------------------------

    if (!validNumber(year) || !validNumber(numPages)){
        return res.status(400).json({"message" : "The year and the number of pages might be a number."});
    };
    //--------------------------------------

    const newBook = {
        id : dataBase.idGenerator++,
        title,
        author,
        year,
        numPages
    };

    dataBase.books.push(newBook);
    //--------------------------------------

    return res.status(201).json(newBook);
};
//========================================================================
//========================================================================

//////////---------- Put ----------//////////
function updateBook(req, res){
    const { id }                            = req.params;
    const { title, author, year, numPages } = req.body;

    if (!Number(id)){
        return res.status(400).json({"message" : "The id might be a number."});
    };
    
    if (!title || !author || !year || !numPages){
        return res.status(400).json({"message" : "The title, author, year and number of page might be given and not empty."});
    };
    
    for (let book of dataBase.books){
        if (book.id === Number(id)){
            book.title    = title;
            book.author   = author;
            book.year     = year;
            book.numPages = numPages;

            return res.status(200).json({"message" : "Book updated"});
        };
    };

    return res.status(404).json({"message" : "Book not found"});
};
//========================================================================
//========================================================================

//////////---------- Exports ----------//////////
module.exports = {
    showBook,
    getBookById,
    addBook,
    updateBook
};

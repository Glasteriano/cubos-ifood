const booksDataBase = require("../dataBase/dataBase");
//========================================================================
//========================================================================

//////////---------- Get ----------//////////
function showBook(_, res){
    return res.status(200).json(booksDataBase);
};
//____________________________________________________

function getBookById(req, res){
    const { id } = req.params;

    if (!Number(id)){
        return res.status(400).json({"message" : "The id might be a number."});
    };
    //--------------------------------------

    for (let book of booksDataBase){
        if (book.id === Number(id)){
            return res.status(200).json(book)
        };
    };
    //--------------------------------------
    
    return res.status(404).json({"message" : "This id does not exist!"});
};
//========================================================================
//========================================================================

module.exports = {
    showBook,
    getBookById
};
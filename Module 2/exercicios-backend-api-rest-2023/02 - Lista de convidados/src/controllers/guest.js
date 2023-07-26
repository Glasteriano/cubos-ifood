const dataBase = require("../dataBase/dataBase")
//===================================================================

//////////---------- Get ----------//////////
function showGuests(_, res){
    return res.status(200).json(dataBase)
}

//===================================================================

module.exports = {
    showGuests
};

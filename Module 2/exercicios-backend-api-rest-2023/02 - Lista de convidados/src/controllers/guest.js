const dataBase = require("../dataBase/dataBase")
//===================================================================

//////////---------- Get ----------//////////
function showGuests(_, res){
    return res.status(200).json(dataBase)
};
//_______________________________________________

function getGuest(req, res){
    const { name }      = req.query;
    const isGuestInList = dataBase.includes(name);

    if (!isGuestInList){
        return res.status(404).json({"message" : "Guest is not in the list yet"});
    }
    else {
        return res.status(200).json({"message" : "Guest in list already"});
    };
}

//===================================================================

module.exports = {
    showGuests,
    getGuest
};

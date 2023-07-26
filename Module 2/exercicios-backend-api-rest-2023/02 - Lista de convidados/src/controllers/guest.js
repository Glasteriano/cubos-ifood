const dataBase = require("../dataBase/dataBase");
//===================================================================
//===================================================================

//////////---------- Get ----------//////////
function showGuests(_, res){
    return res.status(200).json(dataBase);
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
};
//===================================================================
//===================================================================

//////////---------- Post ----------//////////
function addGuest(req, res){
    const { name } = req.body;

    const isGuestInList = dataBase.includes(name);

    if (isGuestInList){
        return res.status(409).json({"message" : "This guest name is already in the list, \
                                      please put a surname to add the same given name guest"});
    };

    dataBase.push(name);

    return res.status(201).json({"message" : "Guest successfully added"});
};
//===================================================================
//===================================================================

//////////---------- Delete ----------//////////
function deleteGuest(req, res){
    const { name } = req.params;

    const targetGest = dataBase.indexOf(name);

    if (targetGest === -1){
        return res.status(404).json({"message" : "Guest not found. No guest was deleted."});
    };

    dataBase.splice(targetGest, 1);

    return res.status(200).json({"message" : "Guest deleted"})
};
//===================================================================
//===================================================================

module.exports = {
    showGuests,
    getGuest,
    addGuest,
    deleteGuest
};

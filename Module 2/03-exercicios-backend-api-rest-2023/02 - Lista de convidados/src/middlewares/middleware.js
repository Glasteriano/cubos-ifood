const guestRouter = require("../controllers/guest");
//===================================================================

function nameQuery(req, res, next) {  // Middleware that verify if the user send a query
    const { name } = req.query;
    //___________________________________________

    if (!name) {  // localhost:3000/guest
        guestRouter.showGuests(req, res);
    }
    else if (name) {  // localhost:3000/guest?name=theNameHere
        guestRouter.getGuest(req, res);
    }
    else {  // should not enter in this else condition
        return res.status(500).json({ "message": "Unexpected error" })
    };
    //___________________________________________

    next();
};
//===================================================================

module.exports = {
    nameQuery
};

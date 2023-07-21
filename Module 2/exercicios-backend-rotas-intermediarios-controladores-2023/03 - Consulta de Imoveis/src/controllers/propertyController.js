const property = require("../dataBase");
//===================================================================

function showAll(_, res){
    res.send(property)
};
//_______________________________________________

function getProperty(req, res){
    const { id } = req.params;

    const foundProperty = property.find((house) => {
        return house.id === ~~id;
    });

    res.send(foundProperty);
}
//===================================================================

module.exports = {
    showAll,
    getProperty
};
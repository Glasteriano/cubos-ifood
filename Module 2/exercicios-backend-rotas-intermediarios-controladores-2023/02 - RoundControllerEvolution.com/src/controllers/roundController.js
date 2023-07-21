const players = require("../dataBase")
//===================================================================

let index = 0;

function nextPlayer(_, res){
    res.send(`It's time to ${players[index]} to play!`);
    index++;

    if (index >= players.length){
        index = 0;
    };

};
//_______________________________________________

function removePlayer(req, res){
    const arraySize = players.length;
    const { index } = req.query;

    if (index >= arraySize){
        return res.send(`There is no player in that index (${index}) to be removed!`);
    };

    players.splice(index, 1);
    res.send(players);
};
//_______________________________________________

function addPlayer(req, res){
    const arraySize = players.length;
    const { name, index } = req.query;

    if (index >= arraySize){
        return res.send(`The index (${index}) do not exist in the array. The player was not added!`);
    };
    //-----------------------------------

    if (index){
        players.splice(index, 0, name);
    }
    else {
        players.push(name);
    }
    //-----------------------------------

    res.send(players);
};
//===================================================================

module.exports = {
    nextPlayer,
    removePlayer,
    addPlayer
};

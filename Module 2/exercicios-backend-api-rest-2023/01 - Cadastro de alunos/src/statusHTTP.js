const express = require("express");
const app = express();

//---- 2xx ----//

//_______________________________________________

//---- 4xx ----//
function unauthorized(){
    return res.status(401).json({"message" : "The password was not given"});
};

function invalidPassword(){
    res.status(401).json({"message" : "Invalid password."});
}
//_______________________________________________

//---- 5xx ----//



//=========================================================

module.exports = {
    unauthorized,
    invalidPassword
};
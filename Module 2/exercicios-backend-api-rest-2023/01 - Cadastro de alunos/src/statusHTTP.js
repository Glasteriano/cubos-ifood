//---- 2xx ----//

//_______________________________________________

//---- 4xx ----//
function unauthorized(){
    const message = {"message" : "The password was not given"};
    return message
};

function invalidPassword(){
    const message = {"message" : "Invalid password."};
    return message
}
//_______________________________________________

//---- 5xx ----//



//=========================================================

module.exports = {
    unauthorized,
    invalidPassword
};
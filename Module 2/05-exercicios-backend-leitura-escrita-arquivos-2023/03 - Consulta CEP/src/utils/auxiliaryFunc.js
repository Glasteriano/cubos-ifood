const fsPromise = require("fs/promises");
const { parse } = require("path");
//=====================================================================================================================

async function consultDataBase(zipCode) {
    const addressesList = await fsPromise.readFile("./src/dataBase/addressesDataBase.json");
    const parseList = JSON.parse(addressesList);  // convert to JavaScript object
    //-----------------------------------------------------------------

    for (let address of parseList) {

        let clearZipCode = String(address.cep).replace("-", "");
        clearZipCode = clearZipCode.replace(".", "");

        if (Number(clearZipCode) === Number(zipCode)) {
            return address;
        };
    };
    //-----------------------------------------------------------------

    return false;  // false means the address is not in the database
};
//___________________________________________________________________________________________________________

async function addNewAddress(addressObj) {
    const dataBase = await fsPromise.readFile("./src/dataBase/addressesDataBase.json");

    const parseDataBase = JSON.parse(dataBase);  // convert the json to a valid JavaScript format

    parseDataBase.push(addressObj);  // add the new address, as it is a array of objects

    const dataBaseStringify = JSON.stringify(parseDataBase);  // convert to a valid json format

    await fsPromise.writeFile("./src/dataBase/addressesDataBase.json", dataBaseStringify);  // rewrite the same file
}
//=====================================================================================================================

//////////---------- Exports ----------//////////
module.exports = {
    consultDataBase,
    addNewAddress
};

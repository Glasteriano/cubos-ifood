const fsPromise = require("fs/promises");

const { buscarEndereco } = require("utils-playground");
const util = require("../utils/auxiliaryFunc");
//=====================================================================================================================

function zipCodeMessage(_, res) {
    res.send("Put the Zip Code as a params!");
};
//_________________________________________________________________________________________________

async function getZipCode(req, res) {
    const { zipCode } = req.params;
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------

    try {
        const result = await util.consultDataBase(zipCode);  // will first consult my database
        //------------------------------------------------------
        //------------------------------------------------------

        if (!result) {
            const targetZipCode = await buscarEndereco(zipCode);

            if (targetZipCode.erro) {
                return res.status(404).json({ message: "Address not found." })
            };

            util.addNewAddress(targetZipCode);  // add the new address first

            return res.status(200).json(targetZipCode);
        };
        //------------------------------------------------------
        //------------------------------------------------------

        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(400).json(error.message);
    };
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
};
//_________________________________________________________________________________________________

async function showDataBase(_, res) {
    const listToShow = [];

    const addressList = await fsPromise.readFile('./src/dataBase/addressesDataBase.json');

    const parseList = JSON.parse(addressList);
    //------------------------------------------------------
    //------------------------------------------------------

    for (let address of parseList) {
        const addressToAdd = {
            ZipCode: address.cep,
            Address: address.logradouro,
            State: address.uf
        };

        listToShow.push(addressToAdd);
    };
    //------------------------------------------------------
    //------------------------------------------------------

    return res.status(200).json(listToShow);
};
//=====================================================================================================================

//////////---------- Exports ----------//////////
module.exports = {
    zipCodeMessage,
    getZipCode,
    showDataBase
};

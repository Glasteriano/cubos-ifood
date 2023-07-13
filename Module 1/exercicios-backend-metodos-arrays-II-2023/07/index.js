function findAddress(addressArray, zipCode){
    //=====================================================
    const findZipCode = (currentZipCode) => {
        return currentZipCode.cep === zipCode;
    };
    //=====================================================

    console.log(addressArray.find(findZipCode));
}
//_____________________________________________________________________________
const endereços = [
    { cep: '00111222', rua: "Rua dos Artistas" },
    { cep: '00111333', rua: "Rua Augusta" },
    { cep: '00222444', rua: "Avenida Paralela" },
    { cep: '11222333', rua: "Rua Carlos Gomes" },
];
//_____________________________________________________________________________

findAddress(endereços, "00222444");

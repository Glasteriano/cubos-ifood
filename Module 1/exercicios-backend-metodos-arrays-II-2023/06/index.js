function city8Char(cityArray){
    //=====================================================
    const maxLength = (currentCity) => {
        return currentCity.length <= 8;
    };
    //=====================================================

    const newArray = cityArray.filter(maxLength);

    console.log(newArray);
}

//________________________________________________________________________
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
//________________________________________________________________________

city8Char(cidades);
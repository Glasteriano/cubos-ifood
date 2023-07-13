function startWithA(nameArray){
    //=====================================================
    const isA = (currentName) => {
        return currentName[0].toLowerCase() === "a";
    };
    //=====================================================

    console.log(nameArray.filter(isA));
}

//___________________________________________________________________
const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];
//___________________________________________________________________

startWithA(nomes)
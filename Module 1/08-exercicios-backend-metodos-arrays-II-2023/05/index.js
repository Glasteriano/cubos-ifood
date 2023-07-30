function checkDriveLicense(usersArray){
    //==========================================================
    const validAgeArray = (currentUser) => {
        const validAge = currentUser.idade >= 18 && currentUser.idade <= 65;
        
        return validAge;
    };

    // create a new array with the valid age
    const newValidArray = usersArray.filter(validAgeArray)
    //==========================================================

    const hasDriveLicense = (currentPerson) => {
        return currentPerson.habilitado;
    };

    // check if all have a driver license
    const isEveryValid = newValidArray.every(hasDriveLicense);
    //==========================================================

    console.log((isEveryValid) ? "All got approved" : "All need to have a driver license");
};
//________________________________________________________________________

const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: true,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
];
//________________________________________________________________________

checkDriveLicense(usuarios);

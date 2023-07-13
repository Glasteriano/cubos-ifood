function devMore20(peopleArray){
    //=====================================================
    const rightDev = (curretPerson) => {
        const isMore20 = curretPerson.idade > 20;
        const isDev    = curretPerson.profissao === "Programador";

        return isDev && isMore20;
    };
    //=====================================================

    console.log(peopleArray.filter(rightDev))
};
//_______________________________________________________________________________________

function journalistMore30(peopleArray){
    //=====================================================
    const rightJournal = (curretPerson) => {
        const isMore30 = curretPerson.idade > 30;
        const isJournalist    = curretPerson.profissao === "Jornalista";

        return isJournalist && isMore30;
    };
    //=====================================================

    console.log(peopleArray.filter(rightJournal))
};
//_______________________________________________________________________________________

function less29(peopleArray){
    //=====================================================
    const youngPerson = (curretPerson) => {
        const isLessThan29 = curretPerson.idade < 29;

        return isLessThan29;
    };
    //=====================================================

    console.log(peopleArray.filter(youngPerson))
};
//_______________________________________________________________________________________
const pessoas = [
    {
           nome: "Antonio",
          idade: 30,
      profissao: "Jornalista",
    },
    {
           nome: "Maria",
          idade: 30,
      profissao: "Jornalista",
    },
    {
           nome: "Ana",
          idade: 21,
      profissao: "Programador",
    },
    {
           nome: "Beatriz",
          idade: 20,
      profissao: "Programador",
    },
    {
           nome: "José",
          idade: 32,
      profissao: "Jornalista",
    },
    {
           nome: "Marcos",
          idade: 30,
      profissao: "Programador",
    },
];
//___________________________________________________________________

devMore20(pessoas);
journalistMore30(pessoas);
less29(pessoas);
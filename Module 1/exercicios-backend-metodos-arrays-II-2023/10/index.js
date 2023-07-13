function evenNumber(numberArray){
    //=====================================================
    const isEven = (currentnumber) => {
        return currentnumber % 2 === 0;
    };
    //=====================================================

    console.log(numberArray.filter(isEven));
}

//___________________________________________________________________
const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
//___________________________________________________________________

evenNumber(numeros)
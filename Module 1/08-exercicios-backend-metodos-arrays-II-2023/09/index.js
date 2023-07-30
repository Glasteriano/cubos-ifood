function greaterThanZero(numberArray){
    //=====================================================
    const aboveZero = (currentnumber) => {
        return currentnumber > 0;
    };
    //=====================================================

    console.log(numberArray.filter(aboveZero));
}

//___________________________________________________________________
const numeros = [10, 987, -886, 0, 12, 199, -45, -67]
//___________________________________________________________________

greaterThanZero(numeros)
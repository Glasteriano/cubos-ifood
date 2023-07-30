function isAllEven(numberArray){
    //=====================================================
    const isEveryEven = (currentNumber) => {
        return currentNumber % 2 === 0;
    };
    //=====================================================

    const isEven = numberArray.every(isEveryEven);

    console.log((isEven) ? "Valid Array" : "Invalid Array");
};
//________________________________________________________________________

const numeros = [0, 122, 4, 6, 7, 8, 44];
//________________________________________________________________________

isAllEven(numeros)
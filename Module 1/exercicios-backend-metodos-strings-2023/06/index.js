function fixNumber(number){
    // put in string to be easier to change
    const numberToString = number.toString()
    const numberSize = numberToString.length;
    //===================================================================================

    if (numberSize === 8){
        return `9 ${numberToString.slice(0, 4)}-${numberToString.slice(4)}`
    };

    if (numberSize === 9){
        return `9 ${numberToString.slice(1, 5)}-${numberToString.slice(5)}`
    };

    if (numberSize === 10){
        return `(${numberToString.slice(0, 2)}) 9 ${numberToString.slice(2, 6)}-${numberToString.slice(6)}`
    };
    //===================================================================================

    return `(${numberToString.slice(0, 2)}) 9 ${numberToString.slice(3, 7)}-${numberToString.slice(7)}`;
};
//___________________________________________________________________
//___________________________________________________________________

const celular = 7199918888;
//___________________________________________________________________
//___________________________________________________________________

console.log(fixNumber(celular))
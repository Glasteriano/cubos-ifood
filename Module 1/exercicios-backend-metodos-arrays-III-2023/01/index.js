function sortCrescent(numberArray){
    //================================================
    const ordering = (first, second) => {
        return first - second;
    };
    //================================================

    console.log(numberArray.sort(ordering));
};
//________________________________________________________________________

function sortDecrescent(numberArray){
    //================================================
    const ordering = (first, second) => {
        return second - first;
    };
    //================================================

    console.log(numberArray.sort(ordering));
};
//________________________________________________________________________

function alphabeticalOrder(stringArray){
    //================================================
    const ordering = (a, b) => {
        return a.localeCompare(b);
    };
    //================================================

    console.log(stringArray.sort(ordering));
};
//________________________________________________________________________

function reverseAlphabeticalOrder(stringArray){
    //================================================
    const ordering = (a, b) => {
        return b.localeCompare(a);
    };
    //================================================

    console.log(stringArray.sort(ordering));
};
//________________________________________________________________________
function orderByLength(stringArray){
    //================================================
    const ordering = (first, second) => {
        return first.length - second.length;
    };
    //================================================

    console.log(stringArray.sort(ordering));
    
};
//________________________________________________________________________
//________________________________________________________________________

const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
//________________________________________________________________________
//________________________________________________________________________

sortCrescent(numeros); // a
sortDecrescent(numeros); // b
console.log(numeros.sort()) // c
alphabeticalOrder(frutas); // d
reverseAlphabeticalOrder(frutas); // e
orderByLength(frutas); // f

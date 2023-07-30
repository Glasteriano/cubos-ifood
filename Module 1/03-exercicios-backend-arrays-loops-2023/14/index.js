const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let index = 0; index < arrayA.length; index++){
    const isSmallerA = arrayA[index] < arrayB[index];

    if (isSmallerA){
        console.log(arrayA[index]);
    }
    else {
        console.log(arrayB[index]);
    }
}
const originalArray = [5, 7, 13, 17, 26, 34, 118, 245, 40, 20, 106];

const chosenNumers = []

for (let number of originalArray){
    const validNumber = (number >= 10 && number <= 20) || number > 100;

    if (validNumber){
        chosenNumers.push(number);
    }
}

console.log(chosenNumers);
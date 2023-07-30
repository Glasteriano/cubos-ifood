const numbers = [3, 4, 7, 8, 1, 6, 5, 10, 4];

let evenSum = 0;

for (let number of numbers){
    const isEven = number % 2 === 0;

    if (isEven){
        evenSum += number;
    }
}

console.log(evenSum);
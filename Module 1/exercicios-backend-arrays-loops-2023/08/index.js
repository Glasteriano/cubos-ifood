const numbers = [3, 24, 1, 8, 11, 7, 15];

let largestNumber = numbers[0];

for (let number of numbers){
    const isLarger = number > largestNumber;

    if (isLarger){
        largestNumber = number;
    }
}

console.log(largestNumber);

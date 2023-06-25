const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = [];
const oddArray = [];

for (let number of original){
    const isEven = number % 2 === 0;

    if (isEven){
        evenArray.push(number);
    }
    else {
        oddArray.push(number);
    }
}

console.log(evenArray);
console.log(oddArray);
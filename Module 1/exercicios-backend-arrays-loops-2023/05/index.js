const originalArray = [1, 4, 12, 21, 53, 88, 112, 20, 21, 87, 90];

const evenArray = [];

for (let number of originalArray){
    const evenNumber = number % 2 === 0;

    if (evenNumber){
        evenArray.push(number);
    }
}

console.log(evenArray);
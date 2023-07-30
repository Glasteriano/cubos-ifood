const numbers = [8, 11, 4, 20];

let majorNumber = numbers[0], minorNumber = numbers[0];

for (let number of numbers){
    const isMajor = number > majorNumber;
    const isMinor = number < minorNumber;

    if (isMajor){
        majorNumber = number;
    }

    if (isMinor){
        minorNumber = number;
    }
}

console.log(majorNumber - minorNumber);
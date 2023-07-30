const insideQueue = ["Jose", "Maria", "Joao"];
const outsideQueue = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let numberInside = insideQueue.length; numberInside < 5; numberInside++){
    insideQueue.push(outsideQueue[0]);
    outsideQueue.shift();

    if (outsideQueue.length === 0){
        break;
    } 
}

console.log(insideQueue);
console.log(outsideQueue);
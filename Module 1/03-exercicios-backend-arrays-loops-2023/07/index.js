const names = ["Ana", "Joana", "Carlos", "amanda"];

const nameStartWithA = [];

for (let name of names){
    const validName = name[0] === "a" || name[0] === "A";

    if (validName){
        nameStartWithA.push(name);
    }
}

console.log(nameStartWithA);
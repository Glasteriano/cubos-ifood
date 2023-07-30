const users = [
    {
        name: "João",
        age: 25,
    },
    {
        name: "Ana",
        age: 18,
    },
    {
        name: "Beatriz",
        age: 15,
    },
    {
        name: "Carlos",
        age: 16,
    },
    {
        name: "Antonio",
        age: 32,
    },
];

const young = [], adult = [];

for (let user of users) {
    (user.age >= 18) ? adult.push(user) : young.push(user);
}

console.log(young)
console.log(adult)
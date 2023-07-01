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
]

for (let user of users) {
    user.adulthood = (user.age >= 18) ? true : false;
}

console.log(users)
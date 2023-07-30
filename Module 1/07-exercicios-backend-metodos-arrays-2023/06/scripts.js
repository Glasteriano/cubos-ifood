function findThePet(petName, ownerArray){
    for (let petAndOwner of ownerArray){
        const isInArray = petAndOwner.pets.includes(petName);
        
        if (isInArray){
            console.log(`${petName}'s owner is ${petAndOwner.nome}`);
            return;
        };
    };
    console.log(`Too bad ${petName}, we couldn't find your owner`);
};
//________________________________________________________________________

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];
//________________________________________________________________________

findThePet("Farofa", usuarios);

findThePet("Hulk", usuarios);
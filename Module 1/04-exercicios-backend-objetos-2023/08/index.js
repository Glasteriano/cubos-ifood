const usuarios = [
    {
        nome: "João",
        pets: [],
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
]

for (let usuario of usuarios) {
    const quantidadeDePets = (usuario.pets.length === 0) ? "não tenho pets" :
                             (usuario.pets.length === 1) ? "tenho 1 pet" : 
                             `tenho ${usuario.pets.length} pets`;
    
    console.log(`Sou ${usuario.nome} e ${quantidadeDePets}`);
}
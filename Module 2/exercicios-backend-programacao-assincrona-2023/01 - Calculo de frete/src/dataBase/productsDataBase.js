const products = [
    {
        "id": 1,
        "name": "Teclado mecânico Keychron K2",
        "price": 1_000_00
    },
    {
        "id": 2,
        "name": "Monitor 29 polegadas",
        "price": 800_00
    },
    {
        "id": 3,
        "name": "Headset",
        "price": 200_00
    },
];
//-------------------------------------------

const statesAndPrice = {
    "RJ": 0.15,
    "SP": 0.15,
    "BA": 0.10,
    "SE": 0.10,
    "AL": 0.10,
    "PE": 0.10,
    "PB": 0.10,
    standardCalc: 0.12
};
//=========================================================

module.exports = {
    products,
    statesAndPrice
};
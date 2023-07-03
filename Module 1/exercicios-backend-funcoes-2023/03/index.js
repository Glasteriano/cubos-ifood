const trolley = {
    clientName: "Guido Bernal",
    products: [
        {
            id: 1,
            name: "T-shirt",
            qtd: 3,
            unitPrice: 3000
        },
        {
            id: 2,
            name: "Shorts",
            qtd: 2,
            unitPrice: 5000
        }
    ]
}
//_____________________________________________________________________________
function printTrolleySummary(trolley) {
    let finalPrice = 0;
    let totalOfItems = 0

    for (let index = 0; index < trolley.products.length; index++){
        const quantity = trolley.products[index].qtd;
        const productPrice = trolley.products[index].unitPrice;
        
        // show me the final prime in cents
        finalPrice += quantity * productPrice;
        // show me how many products that person bought
        totalOfItems += trolley.products[index].qtd;
    }

    let finalPriceInReais = finalPrice / 100; // convert from cents to reais
    moneyLayout = finalPriceInReais.toFixed(2); // just converting in money layout

    console.log(`Client name: ${trolley.clientName}`);
    console.log(`Total items: ${totalOfItems}`);
    console.log(`Total payment: R$${moneyLayout}`);
};

printTrolleySummary(trolley);

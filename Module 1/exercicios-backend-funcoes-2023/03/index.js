const trolley = {
    clientName : "Guido Bernal",
    products   : [
        {
            id        : 1,
            name      : "T-shirt",
            qtd       : 3,
            unitPrice : 30_00
        },
        {
            id        : 2,
            name      : "Shorts",
            qtd       : 2,
            unitPrice : 50_00
        }
    ],

    printSummary : function(){
        let finalPrice = 0;
        let totalOfItems = 0
        
        //===============================================================
        for (let index = 0; index < this.products.length; index++){
            const quantity = this.products[index].qtd;
            const productPrice = this.products[index].unitPrice;
            
            // show me the final prime in cents
            finalPrice += quantity * productPrice;
            // show me how many products that person bought
            totalOfItems += this.products[index].qtd;
        };
        //===============================================================   
        
        let finalPriceInReais = finalPrice / 100; // convert from cents to reais
        const moneyLayout = finalPriceInReais.toFixed(2); // just converting in money layout
        
        console.log(`Client name: ${this.clientName}`);
        console.log(`Total items: ${totalOfItems}`);
        console.log(`Total payment: R$${moneyLayout}\n`);
    }
};
//_____________________________________________________________________________
function addProductToTrolley(trolley, item){
    let itemAlreadyInTrolley = false;
    
    //===============================================================
    for (let productIndex = 0;
        productIndex < trolley.products.length;
        productIndex++){
            
        // just to be easier to read the code
        let sameID = trolley.products[productIndex].id === item.id;
        
        if (sameID){
            trolley.products[productIndex].qtd += item.qtd;
            itemAlreadyInTrolley = true;
            return;
        }
    }
    //===============================================================
        
    // after the for-loop, this will check if is true or not to append the new item
    if (!itemAlreadyInTrolley) {
        trolley.products.push(item)
    }
};
//_____________________________________________________________________________
const newShorts = {
    id        : 2,
    name      : "Shorts",
    qtd       : 3,
    unitPrice : 50_00
};

const newSneaker = {
    id        : 3,
    name      : "Sneaker",
    qtd       : 1,
    unitPrice : 100_00
};
//_____________________________________________________________________________
        
addProductToTrolley(trolley, newShorts);

trolley.printSummary()

addProductToTrolley(trolley, newSneaker);

trolley.printSummary()

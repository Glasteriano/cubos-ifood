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

    //-----------------------------------------------------------------------------------
    addProduct : function(item){
        let itemAlreadyInTrolley = false;
        
        //===========================================================
        for (let productIndex = 0;
            productIndex < trolley.products.length;
            productIndex++){
                
            // just to be easier to read the code
            let sameID = this.products[productIndex].id === item.id;
            
            if (sameID){
                this.products[productIndex].qtd += item.qtd;
                itemAlreadyInTrolley = true;
                return;
            }
        }
        //===========================================================
            
        // after the for-loop, this will check if is true or not to append the new item
        if (!itemAlreadyInTrolley) {
            this.products.push(item)
        }
    },

    //-----------------------------------------------------------------------------------
    printDetails : function(){
        console.log(`CLient: ${this.clientName}\n`);

        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            const productName = this.products[index].name;
            const productUnit = this.products[index].qtd;
            const finalPriceInCents = this.products[index].unitPrice * productUnit;

            let finalPriceInReais = finalPriceInCents / 100; // convert from cents to reais
            const moneyLayout = finalPriceInReais.toFixed(2); // just converting in money layout

            console.log(`Item ${index + 1} - ${productName} - ${productUnit} unit - R$${moneyLayout}`)
        };

        //===========================================================
        let finalPrice = 0;
        let totalOfItems = 0
        
        for (let index = 0; index < this.products.length; index++){
            const quantity = this.products[index].qtd;
            const productPrice = this.products[index].unitPrice;
            
            // show me the final prime in cents
            finalPrice += quantity * productPrice;
            // show me how many products that person bought
            totalOfItems += this.products[index].qtd;
        };

        // convert from cents to reais
        let finalPriceInReais = finalPrice / 100;
        // just converting in money layout
        const moneyLayout = finalPriceInReais.toFixed(2);

        //===========================================================
        console.log();
        console.log(`Total of items: ${totalOfItems} items`);
        console.log(`Total payment: R$${moneyLayout}`);
    },

    //-----------------------------------------------------------------------------------
    printSummary : function(){
        let finalPrice = 0;
        let totalOfItems = 0
        
        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            const quantity = this.products[index].qtd;
            const productPrice = this.products[index].unitPrice;
            
            // show me the final prime in cents
            finalPrice += quantity * productPrice;
            // show me how many products that person bought
            totalOfItems += this.products[index].qtd;
        };
        //===========================================================  
        
        let finalPriceInReais = finalPrice / 100; // convert from cents to reais
        const moneyLayout = finalPriceInReais.toFixed(2); // just converting in money layout
        
        console.log(`Client name: ${this.clientName}`);
        console.log(`Total items: ${totalOfItems}`);
        console.log(`Total payment: R$${moneyLayout}\n`);
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
// trolley.addProduct(newShorts);

// trolley.printSummary()

// trolley.addProduct(newSneaker);

// trolley.printSummary()

trolley.printDetails()
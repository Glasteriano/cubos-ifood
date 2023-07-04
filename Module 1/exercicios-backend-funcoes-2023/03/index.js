const trolley = {
    clientName : "Guido Bernal",
    products   : [
        {
                   id : 1,
                 name : "T-shirt",
                  qtd : 3,
            unitPrice : 30_00
        },
        {
                   id : 2,
                 name : "Shorts",
                  qtd : 2,
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
            };
        };
        //===========================================================
            
        // after the for-loop, this will check if is true or not to append the new item
        if (!itemAlreadyInTrolley) {
            this.products.push(item)
        };
    },

    //-----------------------------------------------------------------------------------
    calcTotalOfItemsAndFinalPrice : function(){
        let finalPriceInCents = 0;
        let totalOfItems = 0;

        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            const quantity = this.products[index].qtd;
            const productPrice = this.products[index].unitPrice;
            
            finalPriceInCents += quantity * productPrice;
            totalOfItems += this.products[index].qtd;
        };
        //===========================================================
        
        return {
                 totalOfItems : totalOfItems,
            finalPriceInCents : finalPriceInCents
        };
    },

    //-----------------------------------------------------------------------------------
    convertCentsToReais : function(value){
        const finalPriceInReais = value / 100;
        const moneyLayout = finalPriceInReais.toFixed(2); // just converting in money layout

        return moneyLayout;
    },

    //-----------------------------------------------------------------------------------
    printDetails : function(){
        console.log(`CLient: ${this.clientName}\n`);

        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            const productName = this.products[index].name;
            const productUnit = this.products[index].qtd;            
            const finalPriceInCents = this.products[index].unitPrice * productUnit;

            console.log(`Item ${index + 1} - ${productName} - ${productUnit} unit - R$${this.convertCentsToReais(finalPriceInCents)}`)
        };

        //===========================================================
        // convert from cents to reais
        const finalPriceInReais = this.calcTotalOfItemsAndFinalPrice().finalPriceInCents / 100;
        // just converting in money layout
        const moneyLayout = finalPriceInReais.toFixed(2);

        //===========================================================
        console.log();
        console.log(`Total of items: ${this.calcTotalOfItemsAndFinalPrice().totalOfItems} items`);
        console.log(`Total payment: R$${moneyLayout}`);
    },

    //-----------------------------------------------------------------------------------
    printSummary : function(){
        // convert from cents to reais and become easier to read
        const totalInCents = this.calcTotalOfItemsAndFinalPrice().finalPriceInCents; 
        const totalInReais = this.convertCentsToReais(totalInCents);
        
        console.log(`Client name: ${this.clientName}`);
        console.log(`Total items: ${this.calcTotalOfItemsAndFinalPrice().totalOfItems}`);
        console.log(`Total payment: R$${totalInReais}\n`);
    }
};

//_____________________________________________________________________________
const newShorts = {
           id : 2,
         name : "Shorts",
          qtd : 3,
    unitPrice : 50_00
};

const newSneaker = {
           id : 3,
         name : "Sneaker",
          qtd : 1,
    unitPrice : 100_00
};

//_____________________________________________________________________________

///////////// Tests /////////////

// trolley.addProduct(newShorts);

// trolley.printSummary()

// trolley.addProduct(newSneaker);

// trolley.printSummary()

// trolley.printDetails()

// console.log(trolley.products)

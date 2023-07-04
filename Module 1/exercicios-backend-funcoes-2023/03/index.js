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
    calcDiscount : function(){
        let cheapestItem = this.products[0].unitPrice; // assuming the first item is the cheapest

        // check if there are more than 4 items in the trolley
        const isFreeValid = (this.calcTotalOfItemsAndFinalPrice().totalOfItems > 4);
        // check if the final price is higher than R$100,00
        const isPercentOffValid = (this.calcTotalOfItemsAndFinalPrice().finalPriceInCents > 100_00);

        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            if (this.products[index].unitPrice < cheapestItem){
                cheapestItem = this.products[index].unitPrice;
            };
        };
        //===========================================================

        const freeItem = (isFreeValid) ? cheapestItem : 0;
        const percentOff = (isPercentOffValid) ? this.calcTotalOfItemsAndFinalPrice().finalPriceInCents * 0.1 : 0;

        return (freeItem > percentOff) ? (freeItem / 100) : (percentOff / 100);
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
            finalPriceInCents : finalPriceInCents,
            finalPriceInReais : this.convertCentsToReais(finalPriceInCents)
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
        console.log(`Client: ${this.clientName}\n`);

        //===========================================================
        for (let index = 0; index < this.products.length; index++){
            const productName = this.products[index].name;
            const productUnit = this.products[index].qtd;            
            const finalPriceInCents = this.products[index].unitPrice * productUnit;

            console.log(`Item ${index + 1} - ${productName} - ${productUnit} unit - R$${this.convertCentsToReais(finalPriceInCents)}`)
        };

        //===========================================================
        console.log();
        console.log(`Total of items: ${this.calcTotalOfItemsAndFinalPrice().totalOfItems} items`);
        console.log(`Total payment: R$${this.calcTotalOfItemsAndFinalPrice().finalPriceInReais}`);
    },

    //-----------------------------------------------------------------------------------
    printSummary : function(){ 
        console.log(`Client name: ${this.clientName}`);
        console.log(`Total items: ${this.calcTotalOfItemsAndFinalPrice().totalOfItems}`);
        console.log(`Total payment: R$${this.calcTotalOfItemsAndFinalPrice().finalPriceInReais}\n`);
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

trolley.printSummary()
console.log(trolley.calcDiscount())

console.log("-------------------------")

trolley.addProduct(newShorts);
trolley.printSummary()
console.log(trolley.calcDiscount())

console.log("-------------------------")

trolley.addProduct(newSneaker);
trolley.printSummary()
console.log(trolley.calcDiscount())

console.log("-------------------------")

trolley.printDetails()
// console.log(trolley.products)

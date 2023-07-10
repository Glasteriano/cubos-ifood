function shoppingList(productsArray){
    //==========================================================
    const forbiddenProducts = (currentProduct) => {
        return currentProduct.toLowerCase() === "cerveja" || currentProduct.toLowerCase() === "vodka";
    };
    //==========================================================

    const isNotAllowedBuy = productsArray.some(forbiddenProducts);

    console.log((isNotAllowedBuy) ? "Check you list again. There are alcoholic beverages." :
                                    "All clear, let's buy!")
};
//_____________________________________________________________________________

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
//_____________________________________________________________________________

shoppingList(palavras)
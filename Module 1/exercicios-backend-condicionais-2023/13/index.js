//tipo de pagamento (dinheiro, credito, debito, cheque).
let paymentMethod = "credit";

//valor da mercadoria (centavos)
let productValue = 130_00;
//_____________________________________________________________________________

const credit = paymentMethod === "credit";
const cheque = paymentMethod === "cheque";
const debit = paymentMethod === "debit" || paymentMethod === "money";
//_____________________________________________________________________________

if (credit) {
    const finalPriceCredit = (productValue * 0.95) / 100;  // 5% off

    console.log(`Price to be paid: R$${finalPriceCredit}`);
}
else if (cheque) {
    const finalPriceCheque = (productValue * 0.97) / 100;  // 3% off

    console.log(`Price to be paid: R$${finalPriceCheque}`);
}
else if (debit) {
    const finalPriceDebit = (productValue * 0.90) / 100;  // 10% off

    console.log(`Price to be paid: R$${finalPriceDebit}`);
}
else {
    console.log("Something went wrong.\nYou shouldn't have seen that message!")
}
//valor do produto comprado.
const productPriceInCents = 1_000_00;

//quantidade de parcelas
const instalment = 10;

//valor pago
const valuePaid = 300;
//_____________________________________________________________________________

const centsToReais = productPriceInCents / 100;
const stillInDebit = valuePaid < centsToReais;
//_____________________________________________________________________________

if (stillInDebit) {
    const valueLeft = centsToReais - valuePaid;
    const priceOfInstalment = centsToReais / instalment;
    const instalmentLeft = valueLeft / priceOfInstalment;
    const pluralOrSingInstalment = (instalmentLeft == 1) ? "instalment" : "instalments";

    console.log(`${instalmentLeft} ${pluralOrSingInstalment} of R$${priceOfInstalment} left.`);
}
else if (!stillInDebit) {
    console.log("You are not in debt anymore!");
}
else {
    conlose.log("Something went wrong!")
}
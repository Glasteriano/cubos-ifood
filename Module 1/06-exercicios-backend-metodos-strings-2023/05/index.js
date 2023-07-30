function hiddenInfo(creditCard){
    const firstNumbers = creditCard.slice(0, 4);
    const lastNumbers = creditCard.slice(-4);
    const unseenInfo = firstNumbers + lastNumbers.padStart(12, "*");

    return unseenInfo;
}


const numeroCartao = '1111222233334444';

console.log(hiddenInfo(numeroCartao));
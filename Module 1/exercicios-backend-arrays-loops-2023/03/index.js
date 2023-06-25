const numeros = [54, 22, 14, 10, 87, 284];

let numberIndex = -1;
//_____________________________________________________________________________

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] == 10){
        numberIndex = i;
        break;
    }
}

console.log(numberIndex);
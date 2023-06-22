let aposentada = false;
let portadoraDeDoenca = false;
let totalDeRendimentos = 3_000_000; //emCentavos

const leaoPegou = totalDeRendimentos > 2_855_970

if (aposentada || portadoraDeDoenca || !leaoPegou) {
    console.log("Isenta")
}
else {
    console.log("Pega Leão")
}
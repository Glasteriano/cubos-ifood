function carPosition(carArray, carIndex){
    const finalResult = carArray.slice(carIndex, carIndex + 3);

    console.log(finalResult.join(" - "))
}
//_____________________________________________________________________________

const nomes = ['Ford Ka', 'Ranger', 'Hilux', 'Corolla', 'Fusca', 'Chevette', 'Brasília'];
const posicao = 3;

carPosition(nomes, posicao);
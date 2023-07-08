function groupDivisor(nameArray, maxSize){
    let groupNumber = 1;

    for (let number = 0; number < nameArray.length; number += maxSize){
        let dividedGroup = nameArray.slice(number, number + maxSize);

        console.log(`Grupo ${groupNumber}: ${dividedGroup.join(", ")}.`);
        groupNumber += 1;
    }
};

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', "Marcelo", "Pedro", "Thiago"];
const tamanhoDoGrupo = 4;

groupDivisor(nomes, tamanhoDoGrupo);
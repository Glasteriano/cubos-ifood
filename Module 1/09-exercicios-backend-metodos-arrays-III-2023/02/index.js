function cityByLength(stringArray){

    console.log(stringArray.reduce((acumulador, valorAtual) => {
        let maiorPalavra = acumulador;

        if (valorAtual.length > maiorPalavra.length){
            maiorPalavra = valorAtual
        };

        return maiorPalavra;
    }));
};

//___________________________________________________________________
//___________________________________________________________________
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];
//___________________________________________________________________
//___________________________________________________________________

cityByLength(cidades);

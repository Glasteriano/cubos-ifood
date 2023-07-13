function greatestNumber(numbergArray){

    console.log(numbergArray.reduce((acumulador, valorAtual) => {
        let maiorNumber = acumulador;

        if (valorAtual > maiorNumber){
            maiorNumber = valorAtual
        };

        return maiorNumber;
    }));
};

//___________________________________________________________________
//___________________________________________________________________

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];
//___________________________________________________________________
//___________________________________________________________________

greatestNumber(numeros);

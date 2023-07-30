function moreThan5Words(wordsArray){
    const fiveOrMore = (currentWord) => {
        return currentWord.length > 5;
    };

    const foundFive = wordsArray.some(fiveOrMore);

    console.log((foundFive) ? "There are invalid words" : "Valid array");
};
//__________________________________________________________________________________

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]
//__________________________________________________________________________________

moreThan5Words(palavras);
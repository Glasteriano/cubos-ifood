function capitaliseTheArray(stringArray){
    let index = 0;
    
    const wordCapitalise = (currentWord) => {
        //=====================================================

        const firstLetter = currentWord.slice(0, 1).toUpperCase();
        const restLetter = currentWord.slice(1).toLowerCase();
        //=====================================================

        const newWord = `${index} - ${firstLetter}${restLetter}`
        index++
        //=====================================================

        return newWord;
    };

    console.log(stringArray.map(wordCapitalise))
};

//___________________________________________________________________
const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
//___________________________________________________________________

capitaliseTheArray(frutas)

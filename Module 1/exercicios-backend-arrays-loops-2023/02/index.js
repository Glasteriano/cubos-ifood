const words = ["A", "e", "B", "C", "E", "z"];

let howManyLetters = 0;
//_____________________________________________________________________________

for (let letter of words){
    const validLetter = letter === "e" || letter === "E";

    if (validLetter){
        howManyLetters += 1;
    }
}
//_____________________________________________________________________________

const pluralOrSingLetter = (howManyLetters == 1) ? "letter" : "letters"; 
const finalMessage = (howManyLetters == 0) ? "No 'E' or 'e' letter was found." :
                   `${howManyLetters} ${pluralOrSingLetter} 'e' or 'E' was found.`;
//_____________________________________________________________________________

console.log(finalMessage);
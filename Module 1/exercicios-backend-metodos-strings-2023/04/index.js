function formatedID(id){
    return id.padStart(6, "0");
};
//=========================================================

function capitalisedName(name){
    let nameArray = name.split(" ");
    let newName = "";

    for (let word of nameArray){
        // get the first letter in the word then concatenate with the other letters with a space in the end
        newName += word[0].toUpperCase() + word.substring(1).toLowerCase() + " ";
    };

    return newName.trimEnd(); // solving the problem about a last whitespace in the last for-loop
};
//=========================================================

function formatedEmail(email){
    return email.trim();
};
//_____________________________________________________________________________

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
//_____________________________________________________________________________

console.log(formatedID(identificador))
console.log(capitalisedName(nome))
console.log(formatedEmail(email))
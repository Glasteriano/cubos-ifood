fixInput = {
    id : function(id){
        return id.padStart(6, "0");
    },
    //=========================================================================

    name : function(name){
        let nameArray = name.split(" ");
        let newName = "";
        //-----------------------------------------------------

        for (let word of nameArray){
            // get the first letter in the word then concatenate with the other letters with a space in the end
            newName += word[0].toUpperCase() + word.substring(1).toLowerCase() + " ";
        };
        //-----------------------------------------------------

        return newName.trimEnd(); // solving the problem about a last whitespace in the last for-loop
    },
    //=========================================================================

    email : function(email){
        return email.trim();
    }
};
//____________________________________________________

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
//____________________________________________________

console.log(fixInput.id(identificador));
console.log(fixInput.name(nome));
console.log(fixInput.email(email));

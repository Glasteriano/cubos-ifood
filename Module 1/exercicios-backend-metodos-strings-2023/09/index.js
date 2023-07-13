function nickName(name){
    let newNick = "@";

    for (let letter of name){
        if (letter !== " "){
            newNick += letter.toLowerCase();
        };

        if (newNick.length >= 13){
            return newNick;
        };
    };

    return newNick;
}
//___________________________________________________________________
//___________________________________________________________________

const nome = 'Guido Cerqueira';
//___________________________________________________________________
//___________________________________________________________________

console.log(nickName(nome));
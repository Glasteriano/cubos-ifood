function noPontuaction(string){

    while (string.includes("-") || string.includes(".")){
        string = string.replace(".", "");
        string = string.replace("-", "")
    };

    return string;
}

//___________________________________________________________________
//___________________________________________________________________

const cpf = "011.022.033-44";
//___________________________________________________________________
//___________________________________________________________________

console.log(noPontuaction(cpf))


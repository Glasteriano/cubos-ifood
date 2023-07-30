function checkEmail(email){
    const hasAt  = email.includes("@");
    const hasDot = email.includes(".");

    const dotIsNotTheFirst = email.indexOf(".") !== 0;
    const dotIsNotTheLast  = email.lastIndexOf(".") !== (email.length - 1);

    const isValidEmail = hasAt && hasDot && dotIsNotTheFirst && dotIsNotTheLast;

    return (isValidEmail) ? "Valid e-mail" : "Invalid e-mail";
};
//___________________________________________________________________
//___________________________________________________________________

const email   = "aluno@cubos.academy";
const email2  = "jose@cubos.academy.br";
const email3  = "jose.messias@cubos.academy";
const email4  = "jose.messias@cubos.io";
const email5  = "jose@cubos";
const email6  = "jose.messias@cubos";
const email7  = "jose.messias@.";
const email8  = "jose.@cubos";
const email9  = ".@";
const email10 = "@.";
const email11 = "jose.messias@cubos.";
const email12 = ".messias@cubos.";
const email13 = ".messias@cubos";
//___________________________________________________________________
//___________________________________________________________________

console.log(checkEmail(email));
console.log(checkEmail(email2));
console.log(checkEmail(email3));
console.log(checkEmail(email4));
console.log(checkEmail(email5));
console.log(checkEmail(email6));
console.log(checkEmail(email7));
console.log(checkEmail(email8));
console.log(checkEmail(email9));
console.log(checkEmail(email10));
console.log(checkEmail(email11));
console.log(checkEmail(email12));
console.log(checkEmail(email13));

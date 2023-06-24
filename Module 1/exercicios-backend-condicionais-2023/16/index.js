//Só é considerado de maior se a idade for maior ou igual a 18.
let studentAge = 16;

//valor verdadeiro ou falso que informa se possui responsável
let haveGuardian = false;
//_____________________________________________________________________________

const adulthood = studentAge >= 18;
//_____________________________________________________________________________

if (adulthood || haveGuardian) {
    console.log("Enrolled with success!");
}
else if (!adulthood && !haveGuardian) {
    console.log("It's not possible to be enrolled!");
}
else {
    console.log("Something went wrong!!!")
}
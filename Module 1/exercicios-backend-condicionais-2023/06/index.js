let heightInCm = 184;

const reject = heightInCm < 180;
const libero = heightInCm >= 180 && heightInCm <= 185;
const ponteiro = heightInCm >= 186 && heightInCm <= 195;
const oposto = heightInCm >= 196 && heightInCm <= 205;
const central = heightInCm > 205;

if (reject) {
    console.log("Not approved!");
}
else if (libero) {
    console.log("Líbero");
}
else if (ponteiro) {
    console.log("Ponteiro");
}
else if (oposto) {
    console.log("Oposto");
}
else if (central) {
    console.log("Central");
}


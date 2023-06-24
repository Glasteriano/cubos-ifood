//quantidade de água ingerida em litro.
let waterLiterDrunk = 2;
//_____________________________________________________________________________

const high = waterLiterDrunk < 1.5;
const moderate = waterLiterDrunk >= 1.5 && waterLiterDrunk <= 3;
const low = waterLiterDrunk > 3;
//_____________________________________________________________________________

if (high) {
    console.log("High risk - You are drink too few water, drink more!");
}
else if (moderate) {
    console.log("Moderate risk - You are drink few water, drink more!");
}
else if (low) {
    console.log("Low risk - You are drink enough water, congrats!");
}
else {
    console.log("Something went wrong. You shouldn't have seen that message!")
}
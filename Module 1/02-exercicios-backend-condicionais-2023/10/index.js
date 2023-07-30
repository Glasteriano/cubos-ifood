let caractere = "Ç";

const number = caractere == 1 || caractere == 2 ||
               caractere == 3 || caractere == 4 ||
               caractere == 5 || caractere == 6 ||
               caractere == 7 || caractere == 8 ||
               caractere == 9 || caractere == 0;

const vowelUpper = caractere === "A" || caractere === "E" || 
                   caractere === "I" || caractere === "O" || 
                   caractere === "U";

const vowelLower = caractere === "a" || caractere === "e" ||
                   caractere === "i" || caractere === "o" ||
                   caractere === "u";

const consonantLower = caractere === "b" || caractere === "c" ||
                       caractere === "d" || caractere === "f" ||
                       caractere === "g" || caractere === "h" ||
                       caractere === "j" || caractere === "k" ||
                       caractere === "l" || caractere === "m" ||
                       caractere === "n" || caractere === "p" ||
                       caractere === "q" || caractere === "r" ||
                       caractere === "s" || caractere === "t" ||
                       caractere === "v" || caractere === "x" ||
                       caractere === "w" || caractere === "y" ||
                       caractere === "z";

const consonantUpper = !vowelLower && !vowelUpper && !number && !consonantLower;

if (number) {
    console.log("Number");
}
else if (vowelLower) {
    console.log("Lowercase vowel");
}
else if (vowelUpper) {
    console.log("Uppercase vowel");
}
else if (consonantLower) {
    console.log("Lowercase consonant");
}
else if (consonantUpper) {
    console.log("Uppercase consonant");
}
else {
    console.log("You typed something wrong!");
}
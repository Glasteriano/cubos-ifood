let player1 = 5;
let player2 = 2;

const even = (player1 + player2) % 2 === 0;
const odd = (player1 + player2) % 2 !== 0 ;

if (even) {
    console.log("Even won!")
}
else if (odd) {
    console.log("Odd won!")
}
else {
    console.log("You should not have seen that!")
}
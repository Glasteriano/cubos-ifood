let jogada1 = "scissors"
let jogada2 = "rock"

// Link the name to the right variable to be easier to read
const rock = jogada1 === 'rock' || jogada2 === 'rock'
const paper = jogada1 === 'paper' || jogada2 === 'paper'
const scissors = jogada1 === 'scissors' || jogada2 === 'scissors'

if (jogada1 === jogada2) {
    console.log('Tie!')
}
else if (rock && !paper) {
    // rock only win if there is no paper in the game
    console.log('Rock won!')
}
else if (scissors && !rock) {
    // scissors only win if there's no rock in the game
    console.log('Scissors won!')
}
else if (paper && !scissors) {
    // paper only win if there's no scissors in the game
    console.log('Paper won!')
}
else {
    // to print this, something went wrong
    console.log("You should'n have seen that!")
}

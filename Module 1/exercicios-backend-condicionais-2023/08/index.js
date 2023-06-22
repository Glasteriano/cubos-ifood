let age = 18;
let hasPathology = false;
let height = 180;
let isStudent = false;

const allowedAge = age > 12 && age < 65;
const allowedHeight = height > 150;

const ticketPrice = (isStudent || age < 18) ? 10 : 20;
// ____________________________________________________________________________

if (allowedAge && allowedHeight && !hasPathology) {
    console.log(`R$${ticketPrice},00`);
}
else {
    console.log("Access denied")
}
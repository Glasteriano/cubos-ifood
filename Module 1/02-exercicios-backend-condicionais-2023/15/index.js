const givenName = "Mario";
const surname = "";
const nickname = "";

if (nickname) {
    console.log(nickname);
}
else if (surname) {
    console.log(givenName + " " + surname);
}
else if (givenName) {
    console.log(givenName);
}
else {
    console.log("Something went wrong!");
}
function checkComment(comment) {
    // put all string in lower-case to be easier to check
    const lowerCaseSentence = comment.toLowerCase()
    const forbiddenWord = lowerCaseSentence.includes("covid") || lowerCaseSentence.includes("pandemic");

    const verification = (!forbiddenWord) ? "Comment Granted" : "Comment blocked for the sake of forbidden words";

    console.log(verification);
}
//_____________________________________________________________________________

const comment1 = "This Covid is too dangerous!";
const comment2 = "This COVID is too dangerous!";
const comment3 = "This pandemic is too dangerous!";
const comment4 = "This PaNdEmIc is too dangerous!";
const comment5 = "This CoViD is too dangerous!";
const comment6 = "This disease is too dangerous!";

checkComment(comment1);
checkComment(comment2);
checkComment(comment3);
checkComment(comment4);
checkComment(comment5);
checkComment(comment6);
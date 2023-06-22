let grade = 8;

const finalGrade = (grade >= 9 && grade <=10) ? "A" :
                    (grade >= 8 && grade < 9) ? "B" :
                    (grade >= 6 && grade < 8) ? "C" :
                    (grade >= 4 && grade < 6) ? "D" :
                    (grade < 4) ? "E" :
                    "Something went wrong with your grade"
// ____________________________________________________________________________

console.log(`Your final grade was ${finalGrade}`)
const test = {
    student: "João",
    subject: "Português",
    grade: 10,
    questions: [
        {
            answer: "a",
            right: "b"
        },
        {
            answer: "c",
            right: "c"
        },
        {
            answer: "e",
            right: "b"
        },
        {
            answer: "b",
            right: "b"
        },
        {
            answer: "c",
            right: "c"
        }
    ]
};

function checkTest(test) {
    let rightAnswers = 0;
    const valueOfEachQuestion = test.grade / test.questions.length;
    
    for (let answerAndRight of test.questions) {
        const isRight = answerAndRight.answer === answerAndRight.right;

        if (isRight) {
            rightAnswers += 1;
        };
    };

    const finalResult = valueOfEachQuestion * rightAnswers
    
    console.log(`The student ${test.student} got ${rightAnswers} right answers and the final grade was ${finalResult}`)

};

checkTest(test);
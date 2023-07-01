const course = {
    id : 1234,
    name : "Logic Programming",
    classes : [],
};

const newClasses = [
    {
        id : 1,
        className : "Introduction to Programming"
    },
    {
        id : 2,
        className : "Variables"
    },
    {
        id : 3,
        className : "Conditionals"
    },
    {
        id : 4,
        className : "Arrays"
    }
];

for (let newClass of newClasses) {
    course.classes.push(newClass);
}

console.log(course)
let { students, idGenerator } = require("../dataBase/dataBase")
//=================================================================================================

///////--------------- Get ---------------///////
function listStudents(_, res){
    return res.status(200).json(students);
};
//_____________________________________________________________________________

function getStudent(req, res){
    const { id } = req.params;

    const foundStudent = students.find((studentId) => {
        return studentId.id === Number(id);
    });

    if (!Number(id)){
        return res.status(400).json({"message" : "The id might be a number"});
    };

    if (!foundStudent){
        return res.status(404).json({"message" : "Student not found"});
    };

    return res.status(200).json(foundStudent)
};
//=================================================================================================

///////--------------- Post ---------------///////
function addStudent(req, res){
    const { name, surname, age, course } = req.body;

    const clearName    = name.trim();
    const clearSurname = surname.trim();
    const clearCourse  = course.trim();

    const validName       = clearName.length > 0;
    const validSurname    = clearSurname.length > 0;
    const validNameCourse = clearCourse.length > 0;
    //----------------------------------------------------------

    if (!Number(age)){
        return res.status(400).json({"message" : "Age might be a number"});
    };

    if (age < 18){
        return res.status(422).json({"message" : "Age might be over 18"})
    };

    if (!validName || !validSurname || !age || !validNameCourse){
        return res.status(400).json({"message" : "Name, surname, age and course might be given and not empty"})
    };
    //----------------------------------------------------------

    const student = {
        id : idGenerator++,
        name,
        surname,
        age,
        course
    };

    students.push(student)
    //----------------------------------------------------------

    return res.status(201).json(students)
};
//=================================================================================================

///////--------------- Delete ---------------///////
function deleteStudent(req, res){
    const { id } = req.params;
    let studentToDelete = 0
    const newArray = []
    //----------------------------------------------------------

    if (!Number(id)){
        return res.status(400).json({"message" : "Id might be a number"})
    }

    for (let student of students){
        if (student.id !== Number(id)){
            newArray.push(student);
        }
        else {
            studentToDelete = student
        };
    };

    if (studentToDelete === 0){
        return res.status(404).json({"message" : "Student not found"})
    }
    //----------------------------------------------------------

    students = newArray;
    return res.status(200).json(studentToDelete);
};
//=================================================================================================

module.exports = {
    listStudents,
    getStudent,
    addStudent,
    deleteStudent
};

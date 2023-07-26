const { students } = require("../dataBase/dataBase")
//=================================================================================================

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
}
//=================================================================================================

module.exports = {
    listStudents,
    getStudent
};

const { students } = require("../dataBase/dataBase")

function listStudents(_, res){
    return res.status(200).json(students);
};
//=========================================================

module.exports = {listStudents};

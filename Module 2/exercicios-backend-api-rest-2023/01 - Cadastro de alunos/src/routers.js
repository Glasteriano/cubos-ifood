const express = require("express");
const route = express();

const {validPassword} = require("./passwordMiddleware");

const student = require("./controllers/students");
//=========================================================

//---- Middleware ----//
route.use(validPassword);
//_______________________________________________

//---- Get ----//
route.get("/students", student.listStudents);
route.get("/students/:id", student.getStudent);
//_______________________________________________

//---- Post ----//
route.post("/students", student.addStudent);
//_______________________________________________

//---- Delete ----//
route.delete("/students/:id", student.deleteStudent);
//_______________________________________________

//---- Put ----//
route.put("/students/:id", student.updateStudent);
//_______________________________________________

//---- Patch ----//
route.patch("/students/:id/course", student.updateStudentCourse);
//=========================================================

module.exports = route;

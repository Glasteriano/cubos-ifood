const express = require("express");
const route = express()

const {validPassword} = require("./passwordMiddleware")

const student = require("./controllers/students")
//=========================================================

//---- Middleware ----//
route.use(validPassword);
//_______________________________________________

//---- Get ----//
route.get("/students", student.listStudents)
route.get("/students/:id", student.getStudent)
//_______________________________________________

//---- Post ----//
route.post("/students", student.addStudent)
//_______________________________________________

//---- Delete ----//


//=========================================================

module.exports = route;

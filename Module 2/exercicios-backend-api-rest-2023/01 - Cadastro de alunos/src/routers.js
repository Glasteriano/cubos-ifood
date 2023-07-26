const express = require("express");
const route = express()

// const students = require("./dataBase/dataBase");
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

//_______________________________________________

//---- Delete ----//

//=========================================================

module.exports = route;

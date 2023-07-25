const express = require("express");
const route = express()

const students = require("./dataBase/dataBase");
const {validPassword} = require("./passwordMiddleware")

const {listStudents} = require("./controllers/students")
//=========================================================

//---- Middleware ----//
route.use(validPassword);
//_______________________________________________

//---- Get ----//
route.get("/students", listStudents)
//_______________________________________________

//---- Post ----//

//_______________________________________________

//---- Delete ----//

//=========================================================

module.exports = route;

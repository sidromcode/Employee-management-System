const express = require("express");
const router = express.Router();// This line creates a new router object. Routers in Express.js are used to handle different HTTP requests for different paths. 
const Employeecontroller = require("..//controllers/Employeecontroller");


router.get("/",Employeecontroller.index)
router.post("/show",Employeecontroller.show)
router.post("/store",Employeecontroller.store)
router.post("/update",Employeecontroller.update)
router.post("/destroy",Employeecontroller.destroy)

module.exports = router
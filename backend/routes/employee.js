const router = require("express").Router();
const {
  getEmployees,
  getEmployee,
  createEmployee,
} = require("../controller/employeeController");

//GET ALL EMPLOYEES
router.get("/", getEmployees);

//GET A SINGLE EMPLOYEE
router.get("/:id", getEmployee);

//POST A NEW EMPLOYEE
router.post("/", createEmployee);

module.exports = router;

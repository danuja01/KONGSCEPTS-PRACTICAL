const e = require("express");
const Employee = require("../models/emp_model");

//get all employee

const getEmployees = async (req, res) => {
  const employee = await Employee.find({});

  res.status(200).json(employee);
};

//get/ search a single employee

const getEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.find({ emp_id: id });

  if (!employee) {
    return res.status(404).json({ error: "no such a workout" });
  } else {
    return res.status(200).json(employee);
  }
};

//create a new employee

const createEmployee = async (req, res) => {
  const { emp_id, emp_name, emp_email, emp_photo, branch_name, bank_name } =
    req.body;
  try {
    const employee = await Employee.create({
      emp_id,
      emp_name,
      emp_email,
      emp_photo,
      branch_name,
      bank_name,
    });
    return res.status(200).json({ msg: employee });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
};

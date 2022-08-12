const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    emp_id: {
      type: Number,
      required: true,
    },
    emp_name: {
      type: String,
      required: true,
    },
    emp_email: {
      type: String,
      required: true,
    },
    emp_photo: {
      type: String,
      required: true,
    },
    branch_name: {
      type: String,
      required: true,
    },
    bank_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);

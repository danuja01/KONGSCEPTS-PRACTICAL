const express = require("express");
const mongoose = require("mongoose");
const employee = require("./routes/employee");
const users = require("./routes/userAuth");

require("dotenv").config();

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/employee", employee);
app.use("/auth", users);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

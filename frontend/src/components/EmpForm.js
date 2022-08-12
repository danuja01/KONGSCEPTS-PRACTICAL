import { useState } from "react";

const EmpFrom = () => {
  const [emp_id, setId] = useState(" ");
  const [emp_name, setName] = useState(" ");
  const [emp_email, setEmail] = useState(" ");
  const [emp_photo, setPhoto] = useState(" ");
  const [branch_name, setBranch] = useState(" ");
  const [bank_name, setBank] = useState(" ");

  return (
    <from className="create">
      <h3>Add a New Employee</h3>

      <label>Employee ID : </label>
      <input
        type="number"
        onChange={(e) => setId(e.target.value)}
        value={emp_id}
      />

      <label>Employee name : </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={emp_name}
      />

      <label>Employee e-mail : </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={emp_email}
      />

      <label>Employee Photo(URL) : </label>
      <input
        type="text"
        onChange={(e) => setPhoto(e.target.value)}
        value={emp_photo}
      />

      <label>Employee branch : </label>
      <input
        type="text"
        onChange={(e) => setBranch(e.target.value)}
        value={branch_name}
      />

      <label>Employee bank : </label>
      <input
        type="text"
        onChange={(e) => setBank(e.target.value)}
        value={bank_name}
      />
    </from>
  );
};

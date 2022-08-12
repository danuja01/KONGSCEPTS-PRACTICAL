import { useEffect, useState } from "react";

//components

import EmpDetails from "../components/EmpDetails";

const Home = () => {
  const [employees, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch("/employee");
      const json = await response.json();

      if (response.ok) {
        setEmployee(json);
      }
    };

    fetchEmployee();
  }, []);

  return (
    <div>
      <h2>Employee Details</h2>
      <div className="home">
        <div className="employee">
          {employees &&
            employees.map((employee) => (
              <EmpDetails key={employee._id} employee={employee} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

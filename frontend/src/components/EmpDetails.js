const WorkoutDetails = ({ employee }) => {
  return (
    <div className="employee-details">
      <img src={employee.emp_photo} className="image" />
      <h4>
        {employee.emp_id}. {employee.emp_name}
      </h4>
      <p>
        <strong>e-mail : </strong> {employee.emp_email}
      </p>
      <p>
        <strong>Branch name : </strong> {employee.branch_name}
      </p>
      <p>
        <strong>Bank name : </strong> {employee.bank_name}
      </p>
    </div>
  );
};

export default WorkoutDetails;

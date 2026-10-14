import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    department: "",
    join_date: "",
    projects: "",
    salary: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/employees/")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://127.0.0.1:8000/api/employees/${editingId}/`
      : "http://127.0.0.1:8000/api/employees/";

    const method = editingId ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (editingId) {
          setEmployees(
            employees.map((employee) =>
              employee.id === editingId ? data : employee,
            ),
          );
        } else {
          setEmployees([...employees, data]);
        }

        setEditingId(null);

        setFormData({
          name: "",
          age: "",
          gender: "",
          phone: "",
          email: "",
          department: "",
          join_date: "",
          projects: "",
          salary: "",
        });
      });
  };
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/employees/${id}/`, {
      method: "DELETE",
    }).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };
  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setEditingId(employee.id);
    setFormData({
      name: employee.name,
      age: employee.age,
      gender: employee.gender,
      phone: employee.phone,
      email: employee.email,
      department: employee.department,
      join_date: employee.join_date,
      projects: employee.projects,
      salary: employee.salary,
    });
  };

  return (
    <div
      className="container
    "
    >
      <h1>Employee Management System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />

        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
        />

        <input
          type="date"
          value={formData.join_date}
          onChange={(e) =>
            setFormData({ ...formData, join_date: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Projects"
          value={formData.projects}
          onChange={(e) =>
            setFormData({ ...formData, projects: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        />

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>

            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Department</th>
            <th>Join Date</th>
            <th>Projects</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employees.indexOf(employee) + 1}</td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.join_date}</td>
              <td>{employee.projects}</td>
              <td>{employee.salary}</td>
              <td>
                <button type="button" onClick={() => handleEdit(employee)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

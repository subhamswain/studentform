import React, { useState } from 'react';

const StudentForm = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    age: '',
    grade: '',
    address: '',
  });
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInfo(studentInfo);
    setStudentInfo({
      name: '',
      age: '',
      grade: '',
      address: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={studentInfo.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            value={studentInfo.grade}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={studentInfo.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      {submittedInfo && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{submittedInfo.name}</td>
              <td>{submittedInfo.age}</td>
              <td>{submittedInfo.grade}</td>
              <td>{submittedInfo.address}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentForm;

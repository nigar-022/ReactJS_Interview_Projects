import React, { useState } from "react";
import "./styless.css";
export default function Formss() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    occupation: "",
    gender: "",
    languages: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit called");
    console.log(formData);
  };

  const changeHandler = (e) => {
    let copyData = { ...formData };
    if (e.target.name === "languages") {
      if (e.target.checked) {
        console.log(copyData);
        copyData.languages.push(e.target.value);
      } else {
        copyData.languages = copyData.languages.filter(
          (el) => el !== e.target.value
        );
      }

      setFormData(copyData);
    } else {
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={changeHandler}
            value={formData.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select
            name="occupation"
            onChange={changeHandler}
            value={formData.occupation}
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={changeHandler}
              checked
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={changeHandler}
            />
            <label>Female</label>
          </div>
        </div>

        <div>
          <label htmlFor="languages">Languages:</label>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="Javascript"
              onChange={changeHandler}
            />
            <label>Javascript</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="ReactJS"
              onChange={changeHandler}
            />
            <label>ReactJS</label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

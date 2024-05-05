import React, { useState, useEffect } from "react";
import "./style.css";

function TableD() {
  const [users, setUsers] = useState([]);

  const [loading, setloading] = useState(false);

  const [serachTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setloading(false);
      } catch (e) {
        console.log(e);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  const handleChnage = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(serachTerm.toLowerCase())
  );
  return (
    <div className="table-container">
      {/* <div>
        {users && users.length && users.map((user) => <div>{user.name}</div>)}
        
      </div> */}
      <input
        type="text"
        placeholder="Search By Name"
        value={serachTerm}
        onChange={handleChnage}
      />
      {loading && <div>...Loading</div>}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIlL</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers &&
            filteredUsers.length &&
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableD;

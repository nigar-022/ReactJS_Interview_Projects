import { useState, useEffect } from "react";
import "./mapandfilter.css";

function MapAndFilter() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const filteredData = () => {
    const data = users
      .filter((user) => {
        return user.id < 5;
      })
      .map((filteredUser) => {
        return filteredUser;
      });
    console.log(data);
    setUsers(data);
  };
  return (
    <>
      <div className="app">
        <h2> Users</h2>
        <div className="wrapper">
          {users &&
            users.map((user) => (
              <div className="card" key={user.id}>
                <div className="card-inner">
                  <p> {user.name}</p>
                  <p>{user.username}</p>
                </div>
              </div>
            ))}
        </div>
        <button onClick={filteredData}>Filter</button>
      </div>
    </>
  );
}

export default MapAndFilter;

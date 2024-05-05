import { useState, useEffect } from "react";
import { lastNameAPI } from "./userDetailsAPI";

export default function DisplayDataTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const userNames = ["gbhavalkar", "tchoy", "ndhangar"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const promises = userNames?.map((user) => lastNameAPI(user));
        console.log(promises);

        const data = await Promise.all(promises);
        console.log(data);
        setUsers(data.map(transformData));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const transformData = (users) => {
    return {
      ...users,
      first_name: toCamelCase(users.first_name),
      last_name: toCamelCase(users.last_name),
    };
  };

  const toCamelCase = (str) => {
    // Function to convert string to camel case
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <h1>Display data in table format</h1>
      {loading ? (
        <div>Loading........</div>
      ) : (
        <div>
          <table className="app">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length &&
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.location}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

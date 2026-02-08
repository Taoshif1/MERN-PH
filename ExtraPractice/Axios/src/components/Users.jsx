import React, { useState, useEffect } from "react";
import axios from "axios";

//   useEffect(() => {
//     // Fetch data when component mounts
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json()) // Convert to JSON
//       .then((data) => setUsers(data)) // Update state
//       .catch((error) => console.error("Error:", error));
//   }, []); // Empty array means this runs only once

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Define the fetching function
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      // 2. Axios stores the actual JSON in the 'data' property
      console.log("Response -> ", response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button className="btn" onClick={fetchUsers}>
        Fetch Users using Axios
      </button>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.email}- {user.address.street}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

import { useEffect } from "react";
import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading Users....</h2>;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users From API</h1>

      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded mb-4 shadow">
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

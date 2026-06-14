import "./App.css";

import { useState } from "react";
import CustomerCard from "./CustomerCard";

function App() {
  const [customers] = useState([
    { id: 1, name: "Nizam", city: "Dubai" },
    { id: 2, name: "Ali", city: "Abu Dhabi" },
    { id: 3, name: "Ahmed", city: "Sharjah" },
  ]);
  return (
    <div>
      <h1>Customer Dashboard</h1>
      <h3>Total Customers: {customers.length}</h3>

      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          name={customer.name}
          city={customer.city}
        />
      ))}
    </div>
  );
}

export default App;

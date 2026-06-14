import { useState } from "react";
import "./App.css";
import CustomerCard from "./CustomerCard";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [customers, setCustomers] = useState([
        { id: 1, name: "Nizam", city: "Dubai" },
    { id: 2, name: "Ali", city: "Abu Dhabi" },
  ])


  function addCustomer () {
    if(name.trim() === "" || city.trim() === "") return;

    const newCustomer = {
      id: Date.now(),
      name,
      city
    };

    setCustomers([...customers, newCustomer]);

    setName("");
    setCity("");
  }

  function deleteCustomer (idToDelete) {
    setCustomers (
      customers.filter((customer) => customer.id !== idToDelete )
    )

  }

  return (

    <div>
      <h1>Customer Dashboard</h1>
      <h3>Total Customers: {customers.length}</h3>

      <input 
        type="text"
        placeholder="Enter Name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
       />

       <br /><br />

       <input 
        type="text"
        placeholder="Enter Your City"
        value = {city}
        onChange={(e) => setCity(e.target.value)} />

        <br /><br />

        <button
          onClick={addCustomer}>Add Customer

        </button>

        {customers.map((customer) => (
          <CustomerCard
            key = {customer.id}
            id = {customer.id}
            name = {customer.name}
            city = {customer.city}
            deleteCustomer = {deleteCustomer}/>
        ))}
    </div>

  )
}

export default App;
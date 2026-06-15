import { useState } from "react";
import "./App.css";
import CustomerCard from "./CustomerCard";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [customers, setCustomers] = useState([
    { id: 1, name: "Nizam", city: "Dubai" },
    { id: 2, name: "Ali", city: "Abu Dhabi" },
    { id: 2, name: "Hassan", city: "Ajman" },
  ]);

  // ADD CUSTOMER
  function addCustomer() {
    if (name.trim() === "" || city.trim() === "") return;

    if (editingId) {
      setCustomers(
        customers.map((customer) =>
          customer.id === editingId ? { ...customer, name, city } : customer,
        ),
      );
      setEditingId(null);
    } else {
      const newCustomer = {
        id: Date.now(),
        name,
        city,
      };

      setCustomers([...customers, newCustomer]);
    }

    setName("");
    setCity("");
  }

  // UPDATE CUSTOMER

  function editCustomer(customer) {
    setName(customer.name);
    setCity(customer.city);
    setEditingId(customer.id);
  }

  // DELETE CUSTOMER
  function deleteCustomer(idToDelete) {
    setCustomers(customers.filter((customer) => customer.id !== idToDelete));
  }

  // CLEAR FORM BUTTON
  function clearForm() {
    setName("");
    setCity("");
    setEditingId("");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen bg-gray-100 ">
      <h1 className="text-5xl font-bold text-center text-gray-700 mb-4">
        Customer Dashboard
      </h1>
      <h3 className="text-center text-lg text-orange-500 mb-6">
        Total Customers: {customers.length}
      </h3>

      <div className="bg-white p-6 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full placeholder:text-emerald-900 p-3 border  border-green-200 text-amber-600 rounded shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full placeholder:text-emerald-900 p-3 border border-green-200 text-amber-600 rounded shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <br />
        <br />
      </div>

      <div className="text-center">
        <button
          onClick={addCustomer}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          {editingId ? "Update Customer" : "Add Customer"}
        </button>

        <button
          onClick={clearForm}
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-600"
        >
          Clear
        </button>
      </div>
      <div className="mt-7 mb-3 bg-blue-600 py-4 rounded-xl">
        <h2 className="text-white text-2xl font-bold text-center">
          Customer Data
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            id={customer.id}
            name={customer.name}
            city={customer.city}
            deleteCustomer={deleteCustomer}
            editCustomer={editCustomer}
            customer={customer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

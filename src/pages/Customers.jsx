import { useState } from "react";
import "../App.css";
import CustomerCard from "../CustomerCard";
import { useEffect } from "react";

function Customers() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");

    return savedCustomers ? JSON.parse (savedCustomers) : 
    [
        { id: 1, name: "Nizam", city: "Dubai" },
        { id: 2, name: "Ali", city: "Abu Dhabi" }
      ];
  });

  useEffect (() => {
    localStorage.setItem("customers", JSON.stringify(customers) )
  }, [customers]);

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

  // SEARCH FUNCTION - FILTER

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()),
  );

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

      {/* CUSTOMER STATISTICS - START */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow">
          <h3 className="font-bold">Total Customers</h3>
          <p className="text-2xl">{customers.length}</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow">
          <h3 className="font-bold">Dubai Customers</h3>
          <p className="text-2xl">
            {customers.filter((customer) => customer.city === "Dubai").length}
          </p>
        </div>

        <div className="bg-purple-500 text-white p-4 rounded-lg text-center shadow">
          <h3 className="font-bold">Abu Dhabi Customers</h3>
          <p className="text-2xl">
            {
              customers.filter((customer) => customer.city === "Abu Dhabi")
                .length
            }
          </p>
        </div>
      </div>
      {/* CUSTOMER STATISTICS - END */} 


      <div className="mt-7 mb-3 text-center bg-blue-100 py-4 rounded-xl">
        <h2 className="text-gray-600 text-2xl font-bold text-center">
          Customer Data
        </h2>
        <br />

        <input
          type="text"
          placeholder="🔍 Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-center p-3 mb-6 border placeholder:text-green-400 text-black border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        />
      </div>

      {filteredCustomers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
          {filteredCustomers.map((customer) => (
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
      ) : (
        <h2 className="text-center text-red-500 font-bold text-xl">
          No Customers Found
        </h2>
      )}
    </div>
  );
}

export default Customers;

function CustomerList() {
  const customers = [
    {
      name: "Nizamudheen",
      city: "Dubai",
    },
    {
      name: "Ahmed",
      city: "Sharjah",
    },
    {
      name: "Ali",
      city: "Abu Dhabi",
    },
    {
      name: "Hassan",
      city: "Ajman",
    },
    {
      name: "Mohammed",
      city: "Dubai",
    },
  ];

  return (
    <div>
      <h1>Customer List</h1>

      {customers.map(function (customer, index) {
        return (
          <div className="card" key={index}>
            <h3>{customer.name}</h3>
            <p>City: {customer.city}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CustomerList;
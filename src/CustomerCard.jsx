function CustomerCard({ id, name, city, deleteCustomer,editCustomer, customer }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>{city}</p>

      <button onClick={() => editCustomer(customer)}>Edit</button>

      <button onClick={() => deleteCustomer(id)}>Delete</button>
    </div>
  );
}

export default CustomerCard;

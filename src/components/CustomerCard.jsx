import { Link } from "react-router-dom";

function CustomerCard({
  id,
  name,
  city,
  deleteCustomer,
  editCustomer,
  customer,
}) {
  return (
    <div className="bg-white rounded shadow p-4 transition hover:shadow-lg">
      
      <Link to={`/customers/${id}`}>
        <h2 className="text-xl text-yellow-900 font-bold">{name}</h2>
      </Link>
      <p className="text-gray-600">{city}</p>

      <div className="flex gap-2 justify-around mt-6 mb-3 border-amber-500 ">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => editCustomer(customer)}
        >
          Edit
        </button>

        <button
          className="bg-red-500 text-white px-3 p-1 rounded ml-2 hover:bg-red-600"
          onClick={() => deleteCustomer(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;

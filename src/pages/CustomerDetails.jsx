import { useParams } from "react-router-dom";

function CustomerDetails() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Customer Details</h1>

      <p className="mt-4">Customer ID: {id}</p>
    </div>
  );
}

export default CustomerDetails;

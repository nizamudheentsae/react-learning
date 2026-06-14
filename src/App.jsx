import "./App.css";
import DashboardCard from "./DashboardCard";



function App() {
  return (
    <div>
      
      <h1>UAE Finanace Dashboard</h1>

      <DashboardCard
        title = "Customers"
        value = "25"/>

        <DashboardCard
        title = "Invoices"
        value = "40"/>

        <DashboardCard
        title = "Revenue"
        value = "AED 15000"/>
      
    </div>
  );
}

export default App;

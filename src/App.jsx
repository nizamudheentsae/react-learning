import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div>
      <ProfileCard name="Nizamudheen" job="MERN Developer" city="Dubai" />

      <ProfileCard name="Ahmed" job="Accountant" city="Sharjah" />

      <ProfileCard name="Ali" job="Designer" city="Abu Dhabi" />
    </div>
  );
}

export default App;

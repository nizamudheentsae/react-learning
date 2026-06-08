function ProfileCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Job: {props.job}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default ProfileCard;
const User = ({ name, location }) => {
  return (
    <div className="user-main">
      <div className="user-info">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9949213099</h4>
      </div>
    </div>
  );
};

export default User;

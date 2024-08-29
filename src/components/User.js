import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-main">
      <div className="user-info">
        <h1>Count= {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9949213099</h4>
      </div>
    </div>
  );
};

export default User;

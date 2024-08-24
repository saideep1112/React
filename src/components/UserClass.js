import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-main">
        <div className="user-info">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: 9949213099</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;

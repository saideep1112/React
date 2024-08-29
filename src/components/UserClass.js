import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log(this.props.name + "child construtor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saideep1112");
    const json = await data.json();

    this.setState({
      user: json,
    });

    this.counter = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    console.log(this.props.name + "child component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.counter);
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location } = this.state.user;
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

import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="about-container">
        <h1>About us page</h1>
        {/* <User name={"saideep Gande (function)"} location={"Hyderabad"} /> */}
        <UserClass name={"Saideep Gande (class)"} location={"Hyderabad"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About us page</h1>
//       <User name={"saideep Gande (function)"} location={"Hyderabad"} />
//       <UserClass name={"Saideep Gande (class)"} location={"Hyderabad"} />
//     </div>
//   );
// };

export default About;

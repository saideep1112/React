import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1>About us page</h1>
      <User name={"saideep Gande (function)"} location={"Hyderabad"} />
      <UserClass name={"Saideep Gande (class)"} location={"Hyderabad"} />
    </div>
  );
};

export default About;

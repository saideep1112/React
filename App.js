import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an vamshi tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);
const JsxHeading = () => (
  <h1 id="heading" className="head">
    Hello from JSX Heading
  </h1>
);

const Heading = () => (
  <div className="header">
    <h1 id="heading" className="head">
      Hello from React component
    </h1>
    <JsxHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
console.log(Heading());

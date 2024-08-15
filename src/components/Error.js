import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPs....</h1>
      <h2>something went wrong</h2>
    </div>
  );
};

export default Error;

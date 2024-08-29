import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  useEffect(() => {
    checkStatus();
  }, []);
  const [status, setStatus] = useState(true);
  const checkStatus = () => {
    window.addEventListener("online", () => {
      setStatus(true);
      console.log("online");
    });

    window.addEventListener("offline", () => {
      setStatus(false);
      console.log("offline");
    });
  };
  return status;
};

export default useOnlineStatus;

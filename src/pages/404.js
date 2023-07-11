import { useEffect } from "react";
import { navigate } from "@reach/router";

const Page404 = () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};

export default Page404;

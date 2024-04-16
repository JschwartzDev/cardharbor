import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ text }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="btn p-10" onClick={() => loginWithRedirect()}>
      {text}
    </button>
  );
};

export default LoginButton;

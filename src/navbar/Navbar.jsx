import "./navbar.css";

import LoginButton from "../login-button/LoginButton";
import LogoutButton from "../logout-button/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="mh-10 w-100 flex-row-around bg-primary nav-container">
      <div className="logo w-20 mh-10 flex-col-center">
        <div className="placeholder w-25 h-25"></div>
      </div>
      <div className="text-color navbar-title">CardHarbor</div>
      <div className="button-group w-20 mh-10 flex-row-center">
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </div>
    </div>
  );
}

export default Navbar;

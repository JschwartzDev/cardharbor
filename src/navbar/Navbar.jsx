import "./navbar.css";
import CardHarborLogo from "../assets/CardHarbor-logo.png";
import LoginButton from "../login-button/LoginButton";
import LogoutButton from "../logout-button/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="navbar mh-10 w-100 flex-row-around bg-primary">
      <div className="placeholder"></div>
      <div className="logo-div">
        <img src={CardHarborLogo} alt="" className="logo" />
      </div>

      <div className="button-group mh-10 flex-row-center">
        {!isAuthenticated && <LoginButton text={"Log In"} />}
        {isAuthenticated && <LogoutButton />}
      </div>
    </div>
  );
}

export default Navbar;

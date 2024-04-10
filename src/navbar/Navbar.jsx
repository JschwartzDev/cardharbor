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
      {/* <div className="search w-50 mh-10 flex-row-center">
        <button className="p-5 btn">All</button>
        <input type="text" className="w-75 p-5" style={{ outline: "none" }} />
        <button className="p-5 btn">Search</button>
      </div> */}
      <div className="w-80 mh-10 flex-row-center">
        <div className="w-100 mh-10 flex-row-between text-color navbar-title">
          <div className="placeholder w-10"></div>
          <div>DeckDex</div>
          <div className="button-group w-20 mh-10 flex-row-center">
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

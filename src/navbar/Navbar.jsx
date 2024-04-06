import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="mh-10 w-100 flex-row-around bg-primary">
      <div className="logo w-20 mh-10 flex-col-center">
        <div className="placeholder w-25 h-25"></div>
      </div>
      <div className="search w-50 mh-10 flex-row-center">
        <button className="p-5 btn">All</button>
        <input type="text" className="w-75 p-5" style={{ outline: "none" }} />
        <button className="p-5 btn">Search</button>
      </div>
      <div className="button-group w-20 mh-10 flex-row-center">
        <FontAwesomeIcon icon={faUser} className="icon mr-10" />
        <FontAwesomeIcon icon={faCartShopping} className="icon ml-10" />
      </div>
    </div>
  );
}

export default Navbar;

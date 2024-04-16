import "./watchlistplaceholder.css";
import LoginButton from "../login-button/LoginButton";

const WatchListPlaceHolder = () => {
  return (
    <div className="mh-30 placeholder-container w-50 flex-col-center">
      <div>
        Create an account to use the watch list feature!
        <LoginButton text={"Create an Account"} />
      </div>
    </div>
  );
};

export default WatchListPlaceHolder;

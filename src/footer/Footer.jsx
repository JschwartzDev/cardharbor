import "./footer.css";
import CardHarborLogo from "../assets/CardHarbor-logo.png";

const Footer = () => {
  return (
    <div className="w-100 mh-10 p-10 flex-row-around footer-container">
      <div>@JschwartzDev</div>
      <div className="logo-div">
        <img src={CardHarborLogo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default Footer;

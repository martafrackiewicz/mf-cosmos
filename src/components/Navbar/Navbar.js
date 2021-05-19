import logo from "../../assets/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
    return (
      <div className="navbar_wrapper">
        <a href="https://usertive.com/" className="navbar_link">
          <img src={logo} alt="userive_logo" className="navbar_logo"></img>
        </a>
      </div>
    );
}

export default Navbar;
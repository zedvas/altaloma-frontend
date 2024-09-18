import { Link } from "react-router-dom";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import '../styles/navbar.css'
import { Close } from "@mui/icons-material";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="socialIcon">
        <a href="./instagram">
          <InstagramIcon />
        </a>
      </div>

      <div className="main">
        <h1>
          <Link to="/">AltaLoma</Link>
        </h1>
        <ul className={active ? "displayMenu": ""}>
          <li onClick={toggleNavbar}>
            <Link to="./shop">Shop</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link to="./journal">Journal</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link to="./about">About</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link to="./contact">Contact</Link>
          </li>
          <li className={active ? "closeHamburger" : "closeHamburger"} onClick={toggleNavbar}><Close/></li>
        </ul>
      </div>

      <div className="icons">
        {/* <Badge badgeContent={""}> */}
          <ShoppingCartIcon />
        {/* </Badge> */}
        <MenuIcon className="hamburger" onClick={toggleNavbar} />
      </div>
    </nav>
  );
};

export default Navbar;

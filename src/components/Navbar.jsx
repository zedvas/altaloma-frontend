import { Link } from "react-router-dom";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import '../styles/navbar.css'

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
        <ul>
          <li>
            <Link to="./shop">Shop</Link>
          </li>
          <li>
            <Link to="./journal">Journal</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="icons">
        <Badge badgeContent={4}>
          <ShoppingCartIcon />
        </Badge>
        <MenuIcon onClick={toggleNavbar} />
      </div>
    </nav>
  );
};

export default Navbar;

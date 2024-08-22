import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">

        <div className="socialContainer">
          <img src="/footerpic.jpeg" alt="" />
          <p>
            Follow us on <a href="www.instagram.com">Instagram</a>
          </p>
        </div>

        <div className="links">
          <Link to="./shop">Shop</Link>
          <Link to="./journal">Journal</Link>
          <Link to="./about">About</Link>
          <Link to="./contact">Contact</Link>
        </div>

      <div className="signup">
        <p>Sign up to receive updates and 10% off your first purchase.</p>
        <input type="text" placeholder="Email Address"/>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Footer;

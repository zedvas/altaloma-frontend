import React from "react";
import { Link } from "react-router-dom";
import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <div>
        <div className={FooterCSS.social}>
          <img src="/footerpic.jpeg" alt="" />
          <p>
            Follow us on <a href="www.instagram.com">Instagram</a>
          </p>
        </div>
        <div className={FooterCSS.links}>
          <Link to="./shop">Shop</Link>
          <Link to="./journal">Journal</Link>
          <Link to="./about">About</Link>
          <Link to="./contact">Contact</Link>
          <Link to="./shipping">Shipping and Returns</Link>
          <Link to="./stockists">Stockists</Link>
        </div>
      </div>
      <div className={FooterCSS.signup}>
        <p>Sign up to receive updates and 10% off your first purchase.</p>
        <input type="text" placeholder="Email Address"/>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Footer;

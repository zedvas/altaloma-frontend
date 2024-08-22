import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <img src="/footerpic.jpeg" alt="" />
          <p>
            Follow us on <a href="www.instagram.com">Instagram</a>
          </p>
        </div>
        <div>
          <Link to="./shop">Shop</Link>
          <Link to="./journal">Journal</Link>
          <Link to="./about">About</Link>
          <Link to="./contact">Contact</Link>
        </div>
      </div>
      <div>
        <p>Sign up to receive updates and 10% off your first purchase.</p>
        <input type="text" placeholder="Email Address"/>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Footer;

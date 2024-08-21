import React from 'react';
import { Link } from 'react-router-dom';
import FooterCSS from './Footer.module.css'

const Footer = () => {
    return (
        <div className={FooterCSS.container}>
            <div className={FooterCSS.left}>
                <img src="/footerpic.jpeg" alt="" />
                <p>Follow us on <a href="www.instagram.com">Instagram</a></p>
            </div>
            <div className={FooterCSS.center}>
                <p>Sign up to receive updates and 10% off your first purchase.</p>
                <input type="text" />
                <button>Submit</button></div>
            <div className={FooterCSS.right}>
                <Link to="./shop">Shop</Link>
                <Link to="./journal">Journal</Link>
                <Link to="./about">About</Link>
                <Link to="./contact">Contact</Link>
                <Link to="./shipping">Shipping and Returns</Link>
                <Link to="./stockists">Stockists</Link>

            </div>
        </div>

    )
}

export default Footer
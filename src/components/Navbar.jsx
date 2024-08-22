import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavbarCSS from './Navbar.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [active, setActive] = useState(false)

    const toggleNavbar = () => {
        setActive(!active);
}

    return (
        <nav className={NavbarCSS.navWrapper}>
            <div className={NavbarCSS.left}>
                <a href="./instagram" className={NavbarCSS.socialLink}><InstagramIcon/></a>
            </div>

            <div className={NavbarCSS.center}>
                <div className={NavbarCSS.logoWrapper}>
                    <h1 className={NavbarCSS.logo}>
                        <Link to="/">Alta Loma</Link>
                    </h1>
                    <ul className={NavbarCSS.links}>
                        <li><Link to="./shop" className={NavbarCSS.navLink}>Shop</Link></li>
                        <li><Link to="./journal" className={NavbarCSS.navLink}>Journal</Link></li>
                        <li><Link to="./about" className={NavbarCSS.navLink}>About</Link></li>
                        <li><Link to="./contact" className={NavbarCSS.navLink}>Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className={NavbarCSS.right}>
                <Badge badgeContent={4} >
                    <ShoppingCartIcon/>
                </Badge>
                <MenuIcon class={NavbarCSS.menuIcon} onClick={toggleNavbar} />
                
            </div>
        </nav>
    )
}

export default Navbar

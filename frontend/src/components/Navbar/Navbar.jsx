import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Switch from '../Switch/Switch';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className='navbar'>
            <img src={assets.logo1} alt="" className='logo' />
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>About Us</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <i className="fa-solid fa-magnifying-glass search-icon" style={{ color: "#f9872a", fontSize: "25px" }}></i>
                <div className="navbar-search-icon">
                    <i className="fa-solid fa-cart-shopping cart-icon"></i>
                    <div className="dot"></div>
                </div>

                <Switch />

                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
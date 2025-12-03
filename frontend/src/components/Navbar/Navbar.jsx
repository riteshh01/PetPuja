import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Switch from '../Switch/Switch';
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { ShoppingBag, LogOut, CircleUser } from "lucide-react";

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
            localStorage.removeItem("token");
            setToken("");
            navigate("/");
    }

    // Helper function to handle link click and close mobile menu
    const handleLinkClick = (menuName) => {
        setMenu(menuName);
        setMobileMenu(false);
    }

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo1} alt="" className='logo' /></Link>


            {/* This menu is hidden on mobile and replaced by the mobile-show version */}
            <ul className='navbar-menu'>
                <li onClick={() => handleLinkClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => handleLinkClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => handleLinkClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>About Us</li>
                <li onClick={() => handleLinkClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
                <li><Switch/></li>
            </ul>

            {/* Right Side (Desktop) */}
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'><i className="fa-solid fa-cart-shopping cart-icon" style={{ color: "#f7872d", fontSize: "25px" }}></i></Link>
                    <div className={getTotalCartAmount() === 0? "" : "dot"}></div>
                </div>
                
                
                {/* These two are hidden on mobile and moved to the dropdown */}
                <div className="navbar-right-desktop-items">
                    {!token ? (
                            <button onClick={() => setShowLogin(true)}>Sign Up</button>
                        ) : (
                            <div className="navbar-profile">
                                <CircleUser size={32} color="#f7872d" className="profile-icon" />

                                <ul className="nav-profile-dropdown">
                                    <li>
                                        <ShoppingBag size={20} color="#f7872d" />
                                        <p>Orders</p>
                                    </li>
                                    <hr />
                                    <li onClick={logout}>
                                        <LogOut size={20} color="#f7872d" />
                                        <p>Logout</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>

                {/* Hamburger Toggle Icon (Mobile Only) */}
                <i 
                    className={mobileMenu ? "fa-solid fa-xmark navbar-toggle-icon" : "fa-solid fa-bars navbar-toggle-icon"}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></i>
            </div>

            {/* Mobile Menu Dropdown  /}
            {/* This whole block appears when mobileMenu is true */}
            <div className={mobileMenu ? "navbar-mobile-dropdown active" : "navbar-mobile-dropdown"}>
                <ul className='navbar-mobile-menu'>
                    <li onClick={() => handleLinkClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => handleLinkClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                    <li onClick={() => handleLinkClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>About Us</li>
                    <li onClick={() => handleLinkClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
                </ul>
                <div className="navbar-mobile-right">
                    <Switch />
                     {!token ? (
                            <button onClick={() => setShowLogin(true)}>Sign Up</button>
                        ) : (
                            <div className="navbar-profile">
                                <CircleUser size={32} color="#f7872d" className="profile-icon" />

                                <ul className="nav-profile-dropdown">
                                    <li>
                                        <ShoppingBag size={20} color="#f7872d" />
                                        <p>Orders</p>
                                    </li>
                                    <hr />
                                    <li>
                                        <LogOut size={20} color="#f7872d" />
                                        <p>Logout</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { assets } from '../../assets/assets.js'
import Switch from '../Switch/Switch';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo1} alt="Logo" />

        <div className='nav-right'>
            <Switch />
            <img className='profile' src={assets.profile_image} alt="Profile" />
        </div>
    </div>
  )
}

export default Navbar
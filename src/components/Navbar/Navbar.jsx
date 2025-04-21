import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  const { getTotalCartAmount } =useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo_logo} alt="Logo" className="logo" /></Link>

      <ul className='navbar-menu'>
        <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        <a href="#explore-menu" className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</a>
        <a href="#app-download" className={menu === "mobile-App" ? "active" : ""} onClick={() => setMenu("mobile-App")}>Mobile-App</a>
        <a href="#footer" className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />

        <div className="navbar-search-icon">
          <Link to="/Cart"><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <button className="sign-in-btn" onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

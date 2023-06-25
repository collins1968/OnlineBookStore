import React from 'react';
import { Link } from 'react-router-dom';
import lib from '../assets/lib.png';
import profile from '../assets/profile.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className='LogoName'>
      <Link to="/" className="logo">
        <img src={lib} alt="libImage"  />
      </Link>
      <h1 className="website-name">E Books</h1>
      </div>
      <div className='searchContainer'>
      <div class="input__container">
  <div class="shadow__input"></div>
  <button class="input__button__shadow">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
      <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
    </svg>
  </button>
  <input type="text" name="text" class="input__search" placeholder="Search for a book" />
</div>
      </div>  
      <div className='navItems'>
        <h2>
        <AiOutlineShoppingCart />Cart
        </h2>
        
        <img src={profile} alt="profileImage" className='profileImage' />
        
        </div>   
      {/* <Link to="/about" className="about-icon">
        <i className="fa-solid fa-info-circle"></i>
      </Link> */}
    </div>
  );
}

export default Header;

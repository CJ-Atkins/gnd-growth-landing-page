import React, { useState } from 'react';
import './navbar.css';
import { ReactComponent as Logo } from '../../assets/logo-rocket.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <a className='navbar__menu-link navbar__menu-link--active ' href='#'>
      Home
    </a>
    <a className='navbar__menu-link' href='#'>
      How it works
    </a>
    <a className='navbar__menu-link' href='#'>
      Services
    </a>
    <a className='navbar__menu-link' href='#'>
      Connect
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__logo-container'>
        <Logo fill='#000' />
      </div>
      <div className='navbar__menu-container'>
        <Menu />
      </div>
      <div className='navbar__btns-container'>
        <button className='navbar__btn navbar__btn--login'>Log in</button>
        <button className='navbar__btn navbar__btn--sign-up'>Sign up</button>
      </div>
      <div className='navbar__responsive-container'>
        {toggleMenu ? (
          <RiCloseLine
            className='navbar__responsive-menu-icon'
            size={28}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className='navbar__responsive-menu-icon'
            size={28}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbar__responsive-menu scale-up-ver-top'>
            <div className='navbar__responsive-btns-container'>
              <button className='navbar__responsive-btn navbar__btn--responsive-login'>
                Log in
              </button>
              <button className='navbar__responsive-btn navbar__responsive-btn--sign-up'>
                Sign up
              </button>
            </div>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

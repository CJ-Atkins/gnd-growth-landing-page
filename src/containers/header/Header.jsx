import React from 'react';
import './header.css';
import { headerImg, headerCard1, headerCard2, headerCard3 } from './imports';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1 className='header__title'>Consistent Sustainable Growth.</h1>
      </div>
      <div className='header__cards-container'>
        <a href='#' className='header__card'>
          <img className='header__card-img' src={headerCard1} />
        </a>
        <a href='#' className='header__card header__card--2'>
          <img className='header__card-img' src={headerCard2} />
        </a>
        <a href='#' className='header__card header__card--3'>
          <img className='header__card-img' src={headerCard3} />
        </a>
      </div>
      <img className='header__image' src={headerImg} />
    </div>
  );
};

export default Header;

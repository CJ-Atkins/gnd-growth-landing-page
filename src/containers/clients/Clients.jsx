import React from 'react';
import './clients.css';
import {
  LogoChase,
  LogoAsana,
  LogoGoogle,
  LogoBuzzfeed,
  LogoToggl,
  LogoWalmart,
} from './imports';

const Clients = () => {
  return (
    <div className='clients'>
      <h3 className='clients__header'>Some of our trusted clients</h3>
      <div className='clients__logos-container'>
        <div className='clients__logo-container'>
          <LogoChase className='clients__logo' />
        </div>
        <div className='clients__logo-container'>
          <LogoAsana className='clients__logo' />
        </div>
        <div className='clients__logo-container'>
          <LogoGoogle className='clients__logo' />
        </div>
        <div className='clients__logo-container'>
          <LogoBuzzfeed className='clients__logo' />
        </div>
        <div className='clients__logo-container'>
          <LogoToggl className='clients__logo' />
        </div>
        <div className='clients__logo-container'>
          <LogoWalmart className='clients__logo' />
        </div>
      </div>
    </div>
  );
};

export default Clients;

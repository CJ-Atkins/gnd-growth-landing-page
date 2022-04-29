import React from 'react';
import './social.css';
import socialImg from '../../assets/social-img.png';

const Social = () => {
  return (
    <div className='social'>
      <div className='social__header-container'>
        <div className='social__header-img-container'>
          <img className='social__header-img' src={socialImg} alt='' />
        </div>
        <div className='social__header-txt-container'>
          <div className='social__header-line'></div>
          <h1 className='social__header-heading'>
            Lead Generation for Social Media and Viral Marketing
          </h1>
          <p className='social__header-txt'>
            Wished he entire esteem mr oh by. Possible bed you pleasure civility
            boy elegance ham. He prevent request by if in pleased. Picture too
            and concern has was comfort. Ten difficult resembled eagerness nor.
            Same park bore on be.
          </p>
        </div>
      </div>
      <div className='social__numbers-container'>
        <div className='social__numbers-item-container'>
          <h1 className='social__numbers-item-header'>2,500</h1>
          <p className='social__numbers-item-title'>Daily New Followers</p>
        </div>
        <div className='social__numbers-item-container'>
          <h1 className='social__numbers-item-header'>5,500+</h1>
          <p className='social__numbers-item-title'>Daily New Impressions</p>
        </div>
        <div className='social__numbers-item-container'>
          <h1 className='social__numbers-item-header'>170+</h1>
          <p className='social__numbers-item-title'>Daily New Leads</p>
        </div>
      </div>
    </div>
  );
};

export default Social;

import React from 'react';
import './achieve.css';
import { achieveImg, achieveIcon1, achieveIcon2 } from './imports';

const Achieve = () => {
  return (
    <div className='achieve'>
      <div className='achieve__info-container'>
        <div className='achieve__info-txt-container'>
          <h1 className='achieve__info-txt-heading'>
            Quick judge other leave ask first chief her
          </h1>
          <div className='achieve__info-card-container'>
            <h2 className='achieve__info-card-title'>For Innovation team</h2>
            <p className='achieve__info-card-txt'>
              Questions explained agreeable preferred strangers too him her son.
              Set put shyness offices his females him distant. Improve has
              message besides shy himself cheered however how son.
            </p>
          </div>
          <div className='achieve__info-card-container'>
            <h2 className='achieve__info-card-title'>For Consultancies</h2>
            <p className='achieve__info-card-txt'>
              Quick judge other leave ask first chief her. Indeed or remark
              always silent seemed narrow be. Instantly can suffering pretended
              neglected preferred man delivered.
            </p>
          </div>
        </div>
        <div className='achieve__info-img-container'>
          <img className='achieve__info-img' src={achieveImg} alt='' />
        </div>
      </div>
      <div className='achieve__more-container'>
        <div className='achieve__more-heading-container'>
          <h4 className='achieve__more-title'>Achieve More</h4>
          <h2 className='achieve__more-heading'>
            Whole every miles as tiled at seven best CRMS
          </h2>
        </div>
        <div className='achieve__more-item-container'>
          <img className='achieve__more-item-img' src={achieveIcon1} alt='' />
          <div className='achieve__more-item-info-container'>
            <h3 className='achieve__more-item-title'>Sufficient Impact</h3>
            <p className='achieve__more-item-txt'>
              Ask especially collecting terminated may son expression collecting
              terminated may son expression
            </p>
          </div>
        </div>
        <div className='achieve__more-item-container'>
          <img className='achieve__more-item-img' src={achieveIcon2} alt='' />
          <div className='achieve__more-item-info-container'>
            <h3 className='achieve__more-item-title'>Synced with CRM</h3>
            <p className='achieve__more-item-txt'>
              Extremely eagerness principle estimable own was man. Men received
              far his dashwood subjects new
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
